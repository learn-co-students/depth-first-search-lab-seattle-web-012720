function depthFirstSearch(rootNode, vertices, edges) {
  let visited = [rootNode];
  let explored = [];
  while (visited.length > 0) {
    const current = visited.pop();
    if (current.discovered === null) {
      current.discovered = true;
      visited.push(...findAdjacent(current.name, vertices, edges))
      explored.push(current);
    }
  }
  return explored;
}

function findAdjacent(nodeName, vertices, edges) {
  const adjNodeNames = edges.reduce((array, edge) => {
    if (edge[0] === nodeName) {
      array.push(edge[1])
    } else if (edge[1] === nodeName) {
      array.push(edge[0])
    }
    return array
  }, []);

  return vertices.filter(node => {
    return adjNodeNames.includes(node.name) && node.discovered === null
  })
}