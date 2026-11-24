def numIslands(mat, n, m):
    if not mat or n == 0 or m == 0:
        return 0

    def dfs(r, c):
        # Stop if out of bounds or on water ('0' or 0)
        if r < 0 or r >= n or c < 0 or c >= m or str(mat[r][c]) == '0':
            return

        # Mark current land cell as visited water
        mat[r][c] = '0'

        # Explore all 4 cardinal directions (up, down, left, right)
        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r, c + 1)

    islands = 0
    for r in range(n):
        for c in range(m):
            if str(mat[r][c]) == '1':
                islands += 1
                dfs(r, c)

    return islands