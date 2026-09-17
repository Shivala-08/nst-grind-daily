def convertToAdjMatrix(n, adjList):
    # Initialize an n x n matrix with zeros
    adjMatrix = [[0] * n for _ in range(n)]
    
    # Traverse each vertex and its neighbors in the adjacency list
    for i in range(n):
        for neighbor in adjList[i]:
            adjMatrix[i][neighbor] = 1
            
    return adjMatrix