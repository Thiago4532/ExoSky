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
                const liEl = document.createElement('li');

                const inputEl = document.createElement('input');
                inputEl.id = 'constellation-input';
                inputEl.type = 'text';
                inputEl.value = constellation.name;
                inputEl.addEventListener('input', (event) => {
                    constellation.name = inputEl.value;
                });
                liEl.appendChild(inputEl);

                const buttonEl = document.createElement('button');
                buttonEl.id = 'constellation-go-button';
                buttonEl.type = 'button';
                buttonEl.textContent = 'Look';
                buttonEl.addEventListener('click', (event) => {
                    const starId = constellationFirstStar(constellation);
                    const { sprite } = this.stars[starId];
                    lookAt(this.camera, sprite.position);
                });
                liEl.appendChild(buttonEl);

                listEl.appendChild(liEl);
            }
        });
    }
}
