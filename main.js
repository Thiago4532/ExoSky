import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createStarFromObject } from './Star.js';

// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const pixelSunDistance = 100;
const parsecSunDistance = 0.000004847;

// Star data
const Sstars = [
    { ra: 0, dec: 0, distance: parsecSunDistance, color: 0x0000ff, magnitude: -26.16 },
];

// Convert spherical coordinates (RA, Dec, distance) to Cartesian (x, y, z)
const stars = Sstars.map(star => {
    const raRadians = (star.ra * Math.PI) / 12; // Convert RA from hours to radians
    const decRadians = (star.dec * Math.PI) / 180; // Convert Dec from degrees to radians
    const distanceInPixels = (star.distance / parsecSunDistance) * pixelSunDistance;

    return createStarFromObject({
        x: 0,
        y: 0,
        z: distanceInPixels,
        distance: distanceInPixels,
        color: star.color,
        absMagnitude: star.magnitude,
    });
});

stars.forEach(star => scene.add(star.sprite));

// Create OrbitControls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enablePan = false;
// controls.enableZoom = false;

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = -0.1;
camera.lookAt(stars[0].sprite.position);

// Handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

// Handle mouse wheel for FOV change
const minFov = 10;
const maxFov = 150;

function onMouseWheel(event) {
    let fov = camera.fov + event.deltaY * 0.05;
    fov = Math.min(maxFov, Math.max(minFov, fov));
    camera.fov = fov;
    camera.updateProjectionMatrix();
}

document.addEventListener('wheel', onMouseWheel);


// Animation loop
function animate() {
    requestAnimationFrame(animate);
    // controls.update();
    //

    renderer.render(scene, camera);
}

document.body.style.overflow = 'hidden';

animate();
