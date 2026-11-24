from collections import deque

def orangesRotting(grid):
    rows = len(grid)
    cols = len(grid[0])
    
    queue = deque()
    fresh = 0
    
    # Collect initial rotten oranges and count fresh ones
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2:
                queue.append((r, c))
            elif grid[r][c] == 1:
                fresh += 1
                
    if fresh == 0:
        return 0
    
    minutes = 0
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    
    # Multi-source BFS level by level (each level = 1 minute)
    while queue and fresh > 0:
        minutes += 1
        for _ in range(len(queue)):
            r, c = queue.popleft()
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh -= 1
                    queue.append((nr, nc))
                    
    return minutes if fresh == 0 else -1