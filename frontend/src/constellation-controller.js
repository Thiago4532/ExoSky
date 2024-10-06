import { Constellation } from './constellation';
import { DSU } from './dsu';

export class ConstellationController {
    constructor(nStars) {
        this.constellations = [];
        this.nStars = nStars;
        this.starC = [];
        for (let i = 0; i < nStars; ++i) {
            this.starC.push(null);
        }
        this.dsu = new DSU(nStars);
    }

    addEdge(u, v) {
        if (u == v) return;
        let constellation = null;
        const pu = this.dsu.find(u), pv = this.dsu.find(v);
        const par = this.dsu.join(u, v);
        if (this.starC[par] === null) {
            const id = this.constellations.length;
            constellation = new Constellation(id, `Constellation ${id}`);
            this.starC[par] = constellation;
            this.constellations.push(constellation);
        } else {
            constellation = this.starC[par];
            let otherConstellation = null;
            if (this.starC[pu] != constellation) {
                otherConstellation = this.starC[pu];
            } else if (this.starC[pv] != constellation) {
                otherConstellation = this.starC[pv];
            }
            if (otherConstellation !== null) {
                for (let edge of otherConstellation.edges) {
                    const [x, y] = edge;
                    constellation.addEdge(x, y);
                }
                this.constellations[otherConstellation.id] = null;
                otherConstellation.destroy();
            }
        }
        constellation.addEdge(u, v);
    }
}
