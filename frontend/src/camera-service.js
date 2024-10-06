export const lookAt = (camera, position) => {
    const {x, y, z} = position;
    const dist = (x * x + y * y + z * z) * -10;
    camera.position.set(x / dist, y / dist, z / dist);
}
