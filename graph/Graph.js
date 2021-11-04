class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);

    return this.adjacencyList;
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (item) => item !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v1].filter(
      (item) => item !== v1
    );
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    this.adjacencyList[vertex].forEach((item) => {
      this.adjacencyList[item] = this.adjacencyList[item].filter(
        (ele) => ele !== vertex
      );
    });
    delete this.adjacencyList[vertex];
    return this.adjacencyList;
  }

  show() {
    return this.adjacencyList;
  }
}

const graph = new Graph();
const vertices = ["tokyo", "taipei", "osaka", "boston", "hk"];
vertices.forEach((v) => {
  graph.addVertex(v);
});

const edges = [
  ["tokyo", "taipei"],
  ["tokyo", "boston"],
  ["hk", "tokyo"],
  ["hk", "taipei"],
  ["hk", "osaka"],
  ["hk", "boston"],
];

edges.forEach((edge) => {
  graph.addEdge(edge[0], edge[1]);
});

console.log("show:", graph.show());
console.log(graph.removeVertex("hk"));
