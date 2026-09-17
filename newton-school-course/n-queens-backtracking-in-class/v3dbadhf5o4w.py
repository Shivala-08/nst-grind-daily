def solveNQueens(n):
    results = []
    board = [["."] * n for _ in range(n)]

    def is_safe(row, col):
        # Check column above
        for i in range(row):
            if board[i][col] == 'Q':
                return False
        
        # Check upper-left diagonal
        i, j = row - 1, col - 1
        while i >= 0 and j >= 0:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j -= 1
            
        # Check upper-right diagonal
        i, j = row - 1, col + 1
        while i >= 0 and j < n:
            if board[i][j] == 'Q':
                return False
            i -= 1
            j += 1
            
        return True

    def solve(row):
        if row == n:
            ans = []
            for i in range(n):
                ans.append("".join(board[i]))
            results.append(ans)
            return

        for col in range(n):
            if is_safe(row, col):
                board[row][col] = 'Q'
                solve(row + 1)
                board[row][col] = '.'

    solve(0)
    return results