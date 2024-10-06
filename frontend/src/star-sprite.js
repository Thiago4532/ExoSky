import * as THREE from 'three';
import {raToDeg, decToDeg, sphericalToCartesian, magnitudeToSize} from './calc.js';

export const createStarSprite = (starData) => {
    const {x, y, z} = starData;

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: starData.color });
    const starSphere = new THREE.Mesh(geometry, material);

    const multiplier = 10;
    starSphere.position.set(multiplier * x, multiplier * y, multiplier * z);
    starSphere.originalColor = starData.color;
    starSphere.name = 'star';

    return starSphere;
};

// export const createStarSprite = (starData) => {
//     const raDegrees = raToDeg(starData.ra);
//     const decDegrees = decToDeg(starData.dec);

//     const pseudoSize = magnitudeToSize(starData.magnitude);

//     const distance = starData.distance / pseudoSize;

//     console.log(starData.name, starData.distance, distance);
//     const {x, y, z} = sphericalToCartesian(raDegrees, decDegrees, distance);

//     const geometry = new THREE.SphereGeometry(1, 16, 16);
//     const material = new THREE.MeshBasicMaterial({ color: (starData.name == 'Gacrux' ? 0xff0000 : 0xffffff) });
//     const starSphere = new THREE.Mesh(geometry, material);

//     const multiplier = 10;
//     starSphere.position.set(multiplier * x, multiplier * y, multiplier * z);
//     starSphere.name = starData.name;

//     return starSphere;
// };
