import * as THREE from 'three';

export class Star {
    constructor(id, data) {
        this.id = id;

        const {x, y, z, color} = data;
        this.x = x;
        this.y = y;
        this.z = z;
        this.color = color;

        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color });
        this.sprite = new THREE.Mesh(geometry, material);

        const multiplier = 10;
        this.sprite.position.set(multiplier * x, multiplier * y, multiplier * z);
        this.sprite.type = 'star';
        this.sprite.starId = id;
    }
}

