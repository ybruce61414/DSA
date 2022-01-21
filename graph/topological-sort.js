class Graph {
  // directed graph: addEdge method is different
  constructor(vertices) {
    this.vertices = vertices;
    // adjacencyList represent the ready-to incident node
    this.adjacencyList = this._init();
  }

  _init() {
    return Array.from({ length: this.vertices }, () => []);
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    return this.adjacencyList;
  }

  show() {
    return this.adjacencyList;
  }

  topologicalSortDFS() {
    let visited = Array.from({ length: this.vertices }, () => false);
    let stack = [];

    const topologicalSortUtil = (v) => {
      visited[v] = true;

      for (let neighbor of this.adjacencyList[v]) {
        if (!visited[neighbor]) {
          topologicalSortUtil(neighbor);
        }
      }
      stack.push(v);
    };

    for (let vertex = 0; vertex < this.vertices; vertex++) {
      if (!visited[vertex]) {
        topologicalSortUtil(vertex);
      }
    }

    //reverse stack
    let left = 0;
    let right = stack.length - 1;
    while (left < right) {
      let temp = stack[right];
      stack[right] = stack[left];
      stack[left] = temp;

      left += 1;
      right -= 1;
    }
    return stack;
  }
}

// Driver Code
const g = new Graph(6);
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);

console.log(g.show());

console.log(g.topologicalSortDFS());
