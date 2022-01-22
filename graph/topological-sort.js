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

  topologicalSortKahn() {
    const indegrees = Array.from({ length: this.vertices }, () => 0);
    const queue = [];
    let res = [];

    //init indegree
    for (let v = 0; v < this.vertices; v++) {
      let neighbors = this.adjacencyList[v];
      for (let neighbor of neighbors) {
        indegrees[neighbor] += 1;
      }
    }

    //init queue
    for (let v = 0; v < this.vertices; v++) {
      if (indegrees[v] === 0) queue.push(v);
    }

    while (queue.length > 0) {
      let dequeue = queue.shift();
      res.push(dequeue);

      //update indegree
      for (let neighbor of this.adjacencyList[dequeue]) {
        indegrees[neighbor] -= 1;
        if (indegrees[neighbor] === 0) queue.push(neighbor);
      }
    }

    return res.length === this.vertices ? res : "cycle";
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
// g.addEdge(1, 2);

// console.log(g.show());
console.log(g.topologicalSortKahn());
