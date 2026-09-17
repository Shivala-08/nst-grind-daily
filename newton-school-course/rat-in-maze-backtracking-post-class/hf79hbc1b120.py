def findPath(maze, n):
    ans = []
    
    # If the starting or ending cell is blocked, no path can exist
    if maze[0][0] == 0 or maze[n - 1][n - 1] == 0:
        return ["-1"]
    
    # Directions: (row_change, col_change, direction_char)
    directions = [
        (-1, 0, 'U'),
        (1, 0, 'D'),
        (0, -1, 'L'),
        (0, 1, 'R')
    ]
    
    def dfs(r, c, path):
        # Base case: if we reach the destination cell
        if r == n - 1 and c == n - 1:
            ans.append("".join(path))
            return
            
        # Mark the current cell as visited by temporarily modifying it (or using a visited set/matrix)
        maze[r][c] = 0
        
        for dr, dc, char in directions:
            nr, nc = r + dr, c + dc
            # Check if the next cell is within bounds and is a free cell (1)
            if 0 <= nr < n and 0 <= nc < n and maze[nr][nc] == 1:
                path.append(char)
                dfs(nr, nc, path)
                path.pop()
                
        # Backtrack: restore the cell value
        maze[r][c] = 1

    dfs(0, 0, [])
    
    return sorted(ans) if ans else ["-1"]