export class Constellation {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.edges = [];
    }

    addEdge(starId1, starId2) {
        this.edges.push([starId1, starId2]);
    }
}
