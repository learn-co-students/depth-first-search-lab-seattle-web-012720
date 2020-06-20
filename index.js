function findAdjacents(node, vertices, edges){
    let adjacents = edges.filter(edge => edge.includes(node.name))
    .map(edge => edge.filter(name => name !== node.name)[0])
    .map(name => vertices.find(vertex => vertex.name == name))
    .filter(vertex => vertex.discovered == null)
    return adjacents
}


function depthFirstSearch(startNode, vertices, edges){
    let stack = []
    let explored = []
    stack.push(startNode)
    while (stack.length !== 0){
        let currentNode = stack.pop()
        explored.push(currentNode)
        if (currentNode.discovered == null){
            currentNode.discovered = true
        }
        let adjacents = findAdjacents(currentNode, vertices, edges)
        adjacents.forEach(vertex => {
            stack.push(vertex)
        })
    }
    return explored
}