import './style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { sampleStars } from '../data/sample-stars';
import { createStarSprite } from './star-sprite.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableRotate = true;
controls.rotateSpeed = 0.2;

controls.enableZoom = true;
controls.zoomSpeed = 10;

controls.enablePan = true;
controls.panSpeed = 5;

controls.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN,
};

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 0.1;

const sprites = sampleStars.map(star => createStarSprite(star));
sprites.forEach(sprite => scene.add(sprite));

camera.lookAt(sprites[0].position);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

const minFov = 10;
const maxFov = 150;

function onMouseWheel(event) {
    let fov = camera.fov + event.deltaY * 0.05;
    fov = Math.min(maxFov, Math.max(minFov, fov));
    camera.fov = fov;
    camera.updateProjectionMatrix();
}

document.addEventListener('wheel', onMouseWheel);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

document.body.style.overflow = 'hidden';

animate();
