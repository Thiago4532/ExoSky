export class DSU {
    constructor(n) {
        this.n = n;
        this.time = 0;
        this.p = [];
        this.sz = [];
        this.st = [];
        for (let i = 0; i < n; ++i) {
            this.p.push(i);
            this.sz.push(1);
        }
    }

    find(u) {
        if (u != this.p[u]) this.p[u] = this.find(this.p[u]);
        return this.p[u];
    }

    join(u, v) {
        u = this.find(u);
        v = this.find(v);
        if (u == v) return u;
        if (this.sz[u] < this.sz[v]) {
            const aux = u;
            u = v;
            v = aux;
        }
        this.p[v] = u;
        this.sz[u] += this.sz[v];
        this.st.push([u, v]);
        ++this.time;
        return u;
    }

    rollback(time) {
        while (this.time > time) {
            const [u, v] = this.st[this.time - 1];
            this.sz[u] -= this.sz[v];
            this.p[v] = v;
            --this.time;
        }
    }
}
