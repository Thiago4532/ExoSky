import './style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { StarClick } from './star-click';
import { planetSet, planetList } from './planets';
import { Star } from './star';
import { ConstellationController } from './constellation-controller';
import { ConstellationsMenu } from './constellations-menu'
import { constellationFirstStar } from './constellation-service'

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

let constellationController = null;
let constellationsMenu = null;

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function getRandomPlanet() {
    return planetList[Math.floor(Math.random() * planetList.length)];
}

// Get the planet name from the query parameter
const planetName_ = getQueryParam('planet');

// Check if the planet exists in planetsURL, else default to Earth
const planetName = (planetSet[planetName_]) ? planetName_ : getRandomPlanet();

// Load the stars from the specified planet
const planetJSON = `${planetName}.json`;
const planetURL = 
    `https://raw.githubusercontent.com/Thiago4532/teste-teste-teste/refs/heads/main/${planetJSON}`;

const allEdges = [];

let currentLine = null;
const lineColor = 0xd8cfff;
const mouse = new THREE.Vector2(); // Store 2D mouse position
const raycaster = new THREE.Raycaster(); // Raycaster to project 2D mouse into 3D space

fetch(planetURL)
    .then(response => {
        return response.json();
    })
    .then(starsJSON => {
        stars.push(...starsJSON.map((star, index) => new Star(index, star)));
        stars.forEach(star => scene.add(star.sprite));
        loadingDisplay.style.display = 'none';
        constellationController = new ConstellationController(stars.length);
        constellationsMenu = new ConstellationsMenu(constellationController, stars, camera);

        const edgesParam = getQueryParam('edges');
        if (edgesParam) {
            const edges = edgesParam.split(';');
            edges.forEach(edge => {
                const [u, v] = edge.split(',').map(x => parseInt(x));
                constellationController.addEdge(u, v);
                allEdges.push({ u, v });

                const lineMaterial = new THREE.LineBasicMaterial({ color: lineColor });
                const points = [
                    new THREE.Vector3(stars[u].sprite.position.x, stars[u].sprite.position.y, stars[u].sprite.position.z),
                    new THREE.Vector3(stars[v].sprite.position.x, stars[v].sprite.position.y, stars[v].sprite.position.z)
                ];
                const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(lineGeometry, lineMaterial);
                scene.add(line);
            });
        }

        const namesParam = getQueryParam('names');
        if (namesParam) {
            const constellationNames = namesParam.split(';');
            constellationNames.forEach((name, index) => {
                if (!constellationController.constellations[index]) return;
                constellationController.constellations[index].name = name;
            });
        }
        constellationsMenu.update();
    })
    .catch(error => {
        console.error('Error loading stars:', error);
        loadingDisplay.textContent = 'Error loading stars';
    });

// Planet name
const planetNameDiv = document.createElement('div');
planetNameDiv.id = 'planet-name';
planetNameDiv.textContent = `Planet: ${planetName}`;
document.body.appendChild(planetNameDiv);

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
}

// Function to get 2D position
function get2DPosition(object) {
    const vector = new THREE.Vector3();
    const widthHalf = 0.5 * renderer.domElement.width;  // Half width of the canvas
    const heightHalf = 0.5 * renderer.domElement.height; // Half height of the canvas

    object.updateWorldMatrix(true, true); // Update world matrix for accurate calculations
    vector.setFromMatrixPosition(object.matrixWorld); // Get the object's world position
    vector.project(camera); // Project the vector to 2D space

    // Calculate 2D screen coordinates
    vector.x = (vector.x * widthHalf) + widthHalf;
    vector.y = -(vector.y * heightHalf) + heightHalf; // Flip Y

    return {
        x: vector.x,
        y: vector.y
    };
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

starClick.addListener(sprite => { 
    if (lastSprite !== null) {
        const lineMaterial = new THREE.LineBasicMaterial({ color: lineColor });
        const points = [
            new THREE.Vector3(lastSprite.position.x, lastSprite.position.y, lastSprite.position.z),
            new THREE.Vector3(sprite.position.x, sprite.position.y, sprite.position.z)
        ];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
        constellationController.addEdge(lastSprite.starId, sprite.starId);
        allEdges.push({ u: lastSprite.starId, v: sprite.starId });

        constellationsMenu.update();

        if (currentLine) {
            scene.remove(currentLine);
            currentLine = null;
        }
    }
    lastSprite = sprite;
});

const onMove = (event) => {
    // Normalize mouse coordinates (-1 to +1) for both X and Y axis
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Update the raycaster to find the point where the mouse is pointing in the 3D world
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);

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

const controlBox = document.createElement('div');
controlBox.id = 'control-box';
controlBox.innerHTML = `
    <h3>Controls</h3>
    <ul>
        <li>Scroll: Zoom in/out</li>
        <li>Click and drag: Rotate camera</li>
        <li>Left-click on star: Connect stars</li>
        <li>Right-click: Cancel connection</li>
    </ul>
    <p>Use these controls to interact with the star map.</p>
`;
document.body.appendChild(controlBox);

const constellationNamesDiv = document.createElement('div');
constellationNamesDiv.id = 'constellation-names-div';
document.body.appendChild(constellationNamesDiv);

function isSpriteInFrontOfCamera(sprite) {
    const cameraDirection = new THREE.Vector3();
    camera.getWorldDirection(cameraDirection);

    const spritePosition = sprite.position.clone();
    const cameraToSprite = spritePosition.sub(camera.position);

    const dot = cameraToSprite.dot(cameraDirection);

    return dot > 0;
}

const animateConstellationNames = () => {
    if (constellationController === null) return;
    constellationNamesDiv.innerHTML = '';
    for (let constellation of constellationController.constellations) {
        if (constellation === null) continue;
        const starId = constellationFirstStar(constellation);
        if (isSpriteInFrontOfCamera(stars[starId].sprite)) {
            const winPos = get2DPosition(stars[starId].sprite);
            const textBox = document.createElement('p');
            textBox.innerHTML = constellation.name;
            textBox.style.left = winPos.x + 'px';
            textBox.style.top = winPos.y + 'px';
            constellationNamesDiv.appendChild(textBox);
        }
    }
}

const copyButton = document.createElement('button');
copyButton.id = 'copy-button';
copyButton.textContent = 'Export to clipboard';
document.body.appendChild(copyButton);

copyButton.addEventListener('click', () => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('planet', planetName);

    const edgesParam = allEdges.map(edge => `${edge.u},${edge.v}`).join(';');
    currentUrl.searchParams.set('edges', edgesParam);

    const constellationNames = constellationController.constellations
        .filter(c => c !== null)
        .map(c => c.name)
        .join(';');
    console.log('Constellation names:', constellationNames);
    currentUrl.searchParams.set('names', constellationNames);

    navigator.clipboard.writeText(currentUrl.toString())
        .then(() => {
            alert('URL copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy URL: ', err);
        });
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    animateConstellationNames();
    renderer.render(scene, camera);
}

animate();

// Create a button and a dropdown list for planet selection
const travelButton = document.createElement('button');
travelButton.id = 'travel-button';
travelButton.textContent = 'Travel to another planet';
document.body.appendChild(travelButton);

const planetDropdown = document.createElement('select');
planetDropdown.id = 'planet-dropdown';
planetDropdown.style.display = 'none';
document.body.appendChild(planetDropdown);

const defaultOption = document.createElement('option');
defaultOption.value = '';
defaultOption.textContent = 'Select your planet';
defaultOption.hidden = true;
defaultOption.selected = true;
planetDropdown.appendChild(defaultOption);

const randomOption = document.createElement('option');
randomOption.value = 'random';
randomOption.textContent = 'Random Planet';
planetDropdown.appendChild(randomOption);


planetList.forEach(planet => {
    const option = document.createElement('option');
    option.value = planet;
    option.textContent = planet;
    planetDropdown.appendChild(option);
});

travelButton.addEventListener('click', () => {
    planetDropdown.style.display = (planetDropdown.style.display === 'none') ? 'block' : 'none';
});

planetDropdown.addEventListener('change', () => {
    let selectedPlanet = planetDropdown.value;
    
    if (selectedPlanet === 'random') {
        selectedPlanet = getRandomPlanet();
    }

    // Redirect to the new planet's URL
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('planet', selectedPlanet);
    window.location.href = currentUrl.toString();
});
