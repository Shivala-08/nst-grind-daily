def solveNQueens(n):
    results = []
    board =[["."]*n for _ in range(n)]
    def issafe(row,col)