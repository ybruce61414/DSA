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

  breadthFirstIterative(start) {
    const quene = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while (quene.length > 0) {
      let curr = quene.shift();
      result.push(curr);

      this.adjacencyList[curr].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          quene.push(neighbor);
        }
      });
    }
    return result;
  }

  show() {
    return this.adjacencyList;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log("show:", g.show());

console.log("bfs:", g.breadthFirstIterative("A"));

//     A
//   /    \
// B       C
// |       |
// D   -   E
//  \     /
//     F

// [A B D E C F]
// [A C E F D B]
