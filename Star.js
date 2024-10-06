import * as THREE from 'three';

const sunMagnitude = -26.832;
// const sunMagnitude = 4.83;

export function createStarFromObject(self) {
    const { x, y, z, color, absMagnitude } = self;
    const magnitude = absMagnitude - 5 * (Math.log10(self.distance) - 1);

    const brightness = 4e10 * Math.pow(10, 0.4 * (sunMagnitude - magnitude));

    const C = 50;
    console.log('brightness', brightness, self.distance);
    const geometry = new THREE.SphereGeometry(40*C, 64, 32);
    const material = new THREE.MeshBasicMaterial({ color });
    const sprite = new THREE.Mesh(geometry, material);

    const star = {
        sprite,
        x,
        y,
        z,
        color,
        brightness,
    };

    star.sprite.position.set(x, y, z*C);
    return star;
}
