from collections import deque


def numEnclaves(grid: list[list[int]]) -> int:
    if not grid or not grid[0]:
        return 0

    rows, cols = len(grid), len(grid[0])
    queue = deque()

    # 1. Enqueue all land cells on the four borders and mark as visited (0)
    for r in range(rows):
        for c in range(cols):
            if (r == 0 or r == rows - 1 or c == 0 or c == cols - 1) and grid[r][c] == 1:
                grid[r][c] = 0
                queue.append((r, c))

    # 2. BFS to sink all land cells reachable from the boundary
    directions = ((1, 0), (-1, 0), (0, 1), (0, -1))
    while queue:
        r, c = queue.popleft()
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                grid[nr][nc] = 0
                queue.append((nr, nc))

    # 3. Remaining 1s are enclaves
    return sum(cell == 1 for row in grid for cell in row)