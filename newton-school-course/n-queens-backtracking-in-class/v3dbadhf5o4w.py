def solveNQueens(n):
    results = []
    board =[["."]*n for _ in range(n)]
    def issafe(row,col):
        for i in range(row):
            if board[i][col]=='Q':
                return False
    def solve(row):
        if row==n:
            ans=[]