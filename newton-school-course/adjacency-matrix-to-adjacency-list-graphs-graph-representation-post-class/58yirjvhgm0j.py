def convertToAdjList(n, adjMat):
    adj_list = []
    for i in range(n):
        neighbors = []
        for j in range(n):
            if adjMat[i][j] == 1:
                neighbors.append(j)
        adj_list.append(neighbors)
    return adj_list