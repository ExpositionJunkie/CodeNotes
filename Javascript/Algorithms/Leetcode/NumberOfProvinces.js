// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

/**
 * @param {number[][]} isConnected
 * @return {number}
 */

const getEdges = (idx, edge) => {
  const edges = [];

  if (edge) {
    for (let i = 0; i < edge.length; i++) {
      if (idx === i) continue;
      if (edge[i] === 0) continue;
      edges.push(i);
    }
  }

  return edges;
};

const buildAdjList = (edges, n = edges.length) => {
  const adjList = Array.from({ length: n }, () => []); //every element is its own array
  for (let i = 0; i < edges.length; i++) {
    adjList[i].push(...getEdges(i, edges[i]));
  }

  return adjList;
};

const dFs = (node, adjList, visited) => {
  visited[node] = true;
  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      dFs(neighbor, adjList, visited);
    }
  }
};

var findCircleNum = function (isConnected) {
  const adjList = buildAdjList(isConnected);
  const visited = {};
  let provinces = 0;

  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex]) {
      provinces++;
      dFs(vertex, adjList, visited);
    }
  }

  return provinces;
};

// Example 1:
var isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
// Output: 2
console.log(findCircleNum(isConnected));

// Example 2:
var isConnected1 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
// Output: 3
console.log(findCircleNum(isConnected1));
