import heapq
import sys


def solve() -> None:
  data = sys.stdin.buffer.read().split()
  if not data:
    return

  n = int(data[0])
  m = int(data[1])
  total_cells = n * m

  costs = [0] * total_cells
  idx = 2
  for i in range(total_cells):
    costs[i] = int(data[idx])
    idx += 1

  inf = 10**30
  dist = [inf] * total_cells
  parent = [-1] * total_cells

  start = 0  # (1, 1) in 1-based indexing -> index 0
  target = total_cells - 1  # (N, M) in 1-based indexing

  dist[start] = costs[start]
  pq = [(dist[start], start)]

  while pq:
    cur_d, u = heapq.heappop(pq)
    if cur_d != dist[u]:
      continue
    if u == target:
      break

    r = u // m
    c = u % m

    # Up
    if r > 0:
      v = u - m
      nd = cur_d + costs[v]
      if nd < dist[v]:
        dist[v] = nd
        parent[v] = u
        heapq.heappush(pq, (nd, v))

    # Down
    if r + 1 < n:
      v = u + m
      nd = cur_d + costs[v]
      if nd < dist[v]:
        dist[v] = nd
        parent[v] = u
        heapq.heappush(pq, (nd, v))

    # Left
    if c > 0:
      v = u - 1
      nd = cur_d + costs[v]
      if nd < dist[v]:
        dist[v] = nd
        parent[v] = u
        heapq.heappush(pq, (nd, v))

    # Right
    if c + 1 < m:
      v = u + 1
      nd = cur_d + costs[v]
      if nd < dist[v]:
        dist[v] = nd
        parent[v] = u
        heapq.heappush(pq, (nd, v))

  path = []
  cur = target
  while cur != -1:
    path.append(cur)
    cur = parent[cur]
  path.reverse()

  out = [str(len(path))]
  for cell in path:
    out.append(f"{cell // m + 1} {cell % m + 1}")
  sys.stdout.write("\n".join(out) + "\n")


if __name__ == "__main__":
  solve()