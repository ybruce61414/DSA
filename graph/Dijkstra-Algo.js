class PriorityQueue {
  //  naive version
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  isEmpty() {
    return this.values.length === 0;
  }

  show() {
    return this.values;
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vt1, vt2, weight) {
    if (!(vt1 in this.adjacencyList)) this.addVertex(vt1);
    if (!(vt2 in this.adjacencyList)) this.addVertex(vt2);

    this.adjacencyList[vt1].push({ node: vt2, weight });
    this.adjacencyList[vt2].push({ node: vt1, weight });
  }

  dijkstra(start) {
    const pq = new PriorityQueue();
    const distances = {};
    const prevNodes = {};

    //  set initial state
    Object.keys(this.adjacencyList).forEach((vertex) => {
      if (vertex === start) {
        distances[vertex] = 0;
        pq.enquene(vertex, 0);
      } else {
        distances[vertex] = Infinity;
      }
      prevNodes[vertex] = null;
    });

    while (!pq.isEmpty()) {
      let minNode = pq.dequeue().val;
      console.log("--de", minNode);

      for (let neighbor of this.adjacencyList[minNode]) {
        let neighborNode = neighbor.node;
        let newDistance = distances[minNode] + neighbor.weight;

        if (newDistance < distances[neighborNode]) {
          distances[neighborNode] = newDistance;
          prevNodes[neighborNode] = minNode;

          console.log("-enqueue-", neighborNode, newDistance);
          pq.enqueue(neighborNode, newDistance);
        }
      }
    }
    return { distances, prevNodes };
  }
}

let testGraph = new WeightedGraph();
testGraph.addVertex("A");
testGraph.addVertex("B");
testGraph.addVertex("C");
testGraph.addVertex("D");
testGraph.addVertex("E");
testGraph.addVertex("F");

testGraph.addEdge("A", "B", 4);
testGraph.addEdge("A", "C", 2);
testGraph.addEdge("B", "E", 3);
testGraph.addEdge("C", "D", 2);
testGraph.addEdge("C", "F", 4);
testGraph.addEdge("D", "F", 1);
testGraph.addEdge("E", "F", 1);

console.log("result:", testGraph.dijkstra("A", "E"));
