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
            for i in range(n):
                s=''
                for j in range(n):
                    s+=board[i][j]
                ans.append(s)
            results.append(ans)
        for col in range(n):
            if issafe(row,col):
                board[row][col]='Q'