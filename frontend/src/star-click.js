import * as THREE from 'three';

export class StarClick {
    constructor(domElement, camera, scene) {
        this.domElement = domElement;
        this.camera = camera;
        this.scene = scene;
        this.isClicking = false;
        this.clickListeners = [];
        this.raycaster = new THREE.Raycaster();

        this.domElement.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.domElement.addEventListener('mouseup', this.onMouseUp.bind(this));
    }

    onMouseDown(event) {
        this.isClicking = true;
    }

    onMouseMove(event) {
        this.isClicking = false;
    }

    onMouseUp(event) {
        if (!this.isClicking) return;

        this.isClicking = false;
        const raycaster = this.raycaster;
        const mouse = new THREE.Vector2();

        const rect = this.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, this.camera);

        const intersects = raycaster.intersectObjects(this.scene.children);

        for (let i = 0; i < intersects.length; i++) {
            const clickedSprite = intersects[i].object;
            if (clickedSprite.name !== 'star')
                continue;

            console.log('Clicked:', clickedSprite);
            this.clickListeners.forEach(listener => listener(clickedSprite));
            break;
        }
    }

    addListener(callback) {
        this.clickListeners.push(callback);
    }
}
