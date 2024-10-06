import * as THREE from 'three';
import {raToDeg, decToDeg, sphericalToCartesian} from './calc.js'

export const createStarSprite = (starData) => {
    const raDegrees = raToDeg(starData.ra);
    const decDegrees = decToDeg(starData.dec);
    
    const {x, y, z} = sphericalToCartesian(raDegrees, decDegrees, starData.distance);

    const geometry = new THREE.SphereGeometry(1, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const starSphere = new THREE.Mesh(geometry, material);

    starSphere.position.set(x, y, z);

    return starSphere;
};
