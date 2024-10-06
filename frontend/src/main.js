import './style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { StarClick } from './star-click';
import { planetsURL } from './planets';
import { brightStarsData } from '../data/bright-stars';
import { Star } from './star';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableRotate = true;
controls.rotateSpeed = 0.2;

controls.enableZoom = false;

controls.enablePan = false;
controls.panSpeed = 5;

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 0.1;

const stars = [];

// Load stars from the URL
const loadingDisplay = document.createElement('div');
loadingDisplay.id = 'loading-display';
loadingDisplay.textContent = 'Loading...';
loadingDisplay.style.display = 'block';
document.body.appendChild(loadingDisplay);

// TODO: Error handling
fetch(planetsURL.earth)
    .then(response => {
        return response.json();
    })
    .then(starsJSON => {
        stars.push(...starsJSON.map((star, index) => new Star(index, star)));
        stars.forEach(star => scene.add(star.sprite));
        loadingDisplay.style.display = 'none';
    })
    .catch(error => {
        console.error('Error loading stars:', error);
        loadingDisplay.textContent = 'Error loading stars';
    });

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

const minFov = 1;
const maxFov = 120;

function onMouseWheel(event) {
    let fov = camera.fov;
    // Apply a scaling factor that reduces changes when FOV is small
    let scale = Math.max(0.1, fov / maxFov); // Scale the delta by the current FOV
    fov += event.deltaY * 0.05 * scale;
    
    // Clamp the FOV to the specified min and max limits
    fov = Math.min(maxFov, Math.max(minFov, fov));

    camera.fov = fov;
    camera.updateProjectionMatrix();

    // Update FOV display
    updateFOVDisplay();
}

document.addEventListener('wheel', onMouseWheel);

var lastSprite = null;
function handleKeyPress(event) {
    const key = event.key;
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
        const index = parseInt(key) - 1;
        if (index < sprites.length) {
            console.log(`Sprite ${key}:`, sprites[index]);

            if (lastSprite !== null) {
                lastSprite.material.color.set(0xffffff);
                lastSprite = null;
            }
            sprites[index].material.color.set(0xff0000);
            lastSprite = sprites[index];
        } else {
            console.log(`No sprite at index ${index}`);
        }
    }
}

document.addEventListener('keydown', handleKeyPress);

const starClick = new StarClick(renderer.domElement, camera, scene);

let currentLine = null;
const lineColor = 0xd8cfff;
const mouse = new THREE.Vector2(); // Store 2D mouse position
const raycaster = new THREE.Raycaster(); // Raycaster to project 2D mouse into 3D space

starClick.addListener(sprite => { 
    if (lastSprite !== null) {
        lastSprite.material.color.set(stars[sprite.starId].color);

        const lineMaterial = new THREE.LineBasicMaterial({ color: lineColor });
        const points = [
            new THREE.Vector3(lastSprite.position.x, lastSprite.position.y, lastSprite.position.z),
            new THREE.Vector3(sprite.position.x, sprite.position.y, sprite.position.z)
        ];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);

        if (currentLine) {
            scene.remove(currentLine);
            currentLine = null;
        }
    }
    sprite.material.color.set(0x00ff00);
    lastSprite = sprite;
});

const onMove = (event) => {
    // Normalize mouse coordinates (-1 to +1) for both X and Y axis
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const intersects = raycaster.intersectObjects(scene.children);

    // Update the raycaster to find the point where the mouse is pointing in the 3D world
    raycaster.setFromCamera(mouse, camera);

    // Reset cursor
    document.body.style.cursor = 'auto';

    // Check if the sprite is intersected
    for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object.type === 'star') {
            document.body.style.cursor = 'pointer'; // Change cursor to pointer
            break;
        }
    }

    if (lastSprite !== null) {
        // Get the point in the direction of the ray (arbitrary distance)
        const intersectPoint = raycaster.ray.origin.clone().add(raycaster.ray.direction.clone().multiplyScalar(10));

        // Create or update the line
        if (!currentLine) {
            const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
            const points = [lastSprite.position.clone(), intersectPoint];
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
            currentLine = new THREE.Line(lineGeometry, lineMaterial);
            scene.add(currentLine);
        } else {
            // Update the points of the existing line
            const points = [lastSprite.position.clone(), intersectPoint];
            currentLine.geometry.setFromPoints(points);
        }
    } else {
        if (currentLine) {
            scene.remove(currentLine);
            currentLine = null;
        }
    }
}

renderer.domElement.addEventListener('mousemove', onMove);
renderer.domElement.addEventListener('wheel', onMove);

// Cancel on mouse right-click
renderer.domElement.addEventListener('contextmenu', (event) => {
    if (lastSprite !== null) {
        lastSprite.material.color.set(0xffffff);
        lastSprite = null;
    }
    if (currentLine) {
        scene.remove(currentLine);
        currentLine = null;
    }
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// Create a control box in the top-right corner
const controlBox = document.createElement('div');
controlBox.id = 'control-box';
controlBox.innerHTML = `
    <h3>Controls</h3>
    <ul>
        <li>Zoom: Scroll mouse wheel</li>
        <li>Change FOV: Use mouse wheel</li>
        <li>Draw Line: Click two stars</li>
        <li>Cancel Line: Right-click</li>
    </ul>
    <p>Use these controls to interact with the star map.</p>
`;
document.body.appendChild(controlBox);
