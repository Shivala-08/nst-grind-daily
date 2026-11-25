import heapq
from typing import List


def minimumEffortPath(heights: List[List[int]]) -> int:
    rows, cols = len(heights), len(heights[0])
    dist = [[float("inf")] * cols for _ in range(rows)]
    dist[0][0] = 0

    # Min-heap storing (max_effort_so_far, row, col)
    pq = [(0, 0, 0)]
    directions = ((1, 0), (-1, 0), (0, 1), (0, -1))

    while pq:
        effort, r, c = heapq.heappop(pq)

        if r == rows - 1 and c == cols - 1:
            return effort

        if effort > dist[r][c]:
            continue

        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols:
                step_effort = abs(heights[nr][nc] - heights[r][c])
                next_effort = max(effort, step_effort)

                if next_effort < dist[nr][nc]:
                    dist[nr][nc] = next_effort
                    heapq.heappush(pq, (next_effort, nr, nc))

    return 0