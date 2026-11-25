from collections import deque
import sys


def solve() -> None:
    data = sys.stdin.read().split()
    if not data:
        return

    m = int(data[0])
    n = int(data[1])
    grid = [list(data[2 + i]) for i in range(m)]

    queue: deque[tuple[int, int]] = deque()

    # Collect all boundary 'O' cells as starting points
    for r in range(m):
        for c in (0, n - 1):
            if 0 <= c < n and grid[r][c] == "O":
                grid[r][c] = "#"
                queue.append((r, c))

    for c in range(n):
        for r in (0, m - 1):
            if 0 <= r < m and grid[r][c] == "O":
                grid[r][c] = "#"
                queue.append((r, c))

    # BFS to mark all 'O' cells reachable from the boundary
    directions = ((1, 0), (-1, 0), (0, 1), (0, -1))
    while queue:
        r, c = queue.popleft()
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == "O":
                grid[nr][nc] = "#"
                queue.append((nr, nc))

    # Flip surrounded 'O' -> 'X' and restore safe '#' -> 'O'
    for r in range(m):
        for c in range(n):
            if grid[r][c] == "O":
                grid[r][c] = "X"
            elif grid[r][c] == "#":
                grid[r][c] = "O"

    for row in grid:
        print("".join(row))


if __name__ == "__main__":
    solve()