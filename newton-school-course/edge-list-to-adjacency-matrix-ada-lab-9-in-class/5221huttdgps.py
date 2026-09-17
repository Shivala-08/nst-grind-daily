def convertToAdjMatrix(n, edgeList):
    mat = [[0]*n for i in range(n)]
    for x,y in edgeList:
        mat[x][y] = 1
        mat[y][x] = 1
    return mat