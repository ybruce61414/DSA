class PriorityQuene {
  constructor() {
    this.values = [];
  }

  enquene(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequene() {
    return this.values.shift();
  }

  isEmpty() {
    return this.values.length === 0;
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

  dijkstra(start, finish) {
    const pq = new PriorityQuene();
    const distances = {};
    const prevNodes = {};
    const path = [];

    //  set initial state
    Object.keys(this.adjacencyList).forEach((vertex) => {
      if (vertex === start) {
        distances[vertex] = 0;
        pq.enquene(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        pq.enquene(vertex, Infinity);
      }
      prevNodes[vertex] = null;
    });

    while (!pq.isEmpty()) {
      let minNode = pq.dequene().val;
      if (minNode === finish) {
        while (prevNodes[minNode]) {
          path.push(minNode);
          minNode = prevNodes[minNode];
        }
        break;
      }

      if (minNode || distances[minNode] !== Infinity) {
        for (let neighbor in this.adjacencyList[minNode]) {
          //  find neighbor node
          let neighborNode = this.adjacencyList[minNode][neighbor];
          console.log("--neighborNode-", neighborNode);
          let candidate = distances[minNode] + neighborNode.weight;

          if (candidate < distances[neighborNode.node]) {
            distances[neighborNode.node] = candidate;
            prevNodes[neighborNode.node] = minNode;
            pq.enquene(neighborNode.node, candidate);
          }
        }
      }
      console.log("---path", path.concat(minNode).reverse());
      return distances;
    }
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

console.log("dis===", testGraph.dijkstra("A", "E"));
