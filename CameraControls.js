export class CameraControls {
    constructor(camera) {
        this.camera = camera;
        this.isMouseDown = false;
        this.rotationSpeed = 0.0001;

        document.addEventListener('mousedown', (event) => {
            this.isMouseDown = true;
            this.previousMouseX = event.clientX;
            this.previousMouseY = event.clientY;
        });

        document.addEventListener('mouseup', (_) => {
            this.isMouseDown = false;
        });

        document.addEventListener('mousemove', (event) => {
            if (!this.isMouseDown) return;

            const deltaX = event.clientX - this.previousMouseX;
            const deltaY = event.clientY - this.previousMouseY;

            // Update camera rotation based on mouse movement
            camera.rotation.y -= deltaX * this.rotationSpeed;  // Yaw (horizontal rotation)
            camera.rotation.x -= deltaY * this.rotationSpeed;  // Pitch (vertical rotation)

            // Update previous mouse position
            previousMouseX = event.clientX;
            previousMouseY = event.clientY;
        });

    }

    update() {
        // Implement camera update logic here
    }
}
