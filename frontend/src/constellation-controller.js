import { Constellation } from './constellation';

export class ConstellationController {
    constructor() {
        this.constellations = [];
        this.constellations.push(new Constellation(0, 'Constellation'));
    }

    addEdge(u, v) {
        this.constellations[0].addEdge(u, v);
    }
}
