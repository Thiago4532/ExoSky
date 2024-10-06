import { constellationFirstStar } from './constellation-service';
import { lookAt } from './camera-service';

export class ConstellationsMenu {
    constructor(constellationController, stars, camera) {
        this.constellationController = constellationController;
        this.stars = stars;
        this.camera = camera;

        const menuButton = document.createElement('button');
        menuButton.id = 'menu-button';
        menuButton.innerHTML = 'Constellations';
        document.body.appendChild(menuButton);

        this.el = document.createElement('div');
        this.el.id = 'menu';
        this.el.innerHTML = `
            <h3>Constellations</h3>
            <ul>
            </ul>
        `;
        document.body.appendChild(this.el);

        menuButton.addEventListener('click', () => {
            this.el.classList.toggle('show');
        });
    }

    update() {
        const listEl = this.el.querySelector('ul');
        listEl.innerHTML = '';
        this.constellationController.constellations.forEach((constellation) => {
            if (constellation !== null) {
                const constellationItem = document.createElement('li');
                constellationItem.textContent = constellation.name;
                constellationItem.style.cursor = 'pointer';
                constellationItem.addEventListener('click', (event) => {
                    const starId = constellationFirstStar(constellation);
                    const { sprite } = this.stars[starId];
                    lookAt(this.camera, sprite.position);
                });
                listEl.appendChild(constellationItem);
            }
        });
    }
}
