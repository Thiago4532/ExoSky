export class Constellation {
    constructor() {
        this.edges = [];
    }

    addEdge(starId1, starId2) {
        this.edges.push([starId1, starId2]);
    }
}
