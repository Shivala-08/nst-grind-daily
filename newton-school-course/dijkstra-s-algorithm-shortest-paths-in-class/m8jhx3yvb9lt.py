import heapq


def shortestPaths(n, src, edges):
  # Build undirected adjacency list: adj[u] = [(v, w), ...]
  adj = [[] for _ in range(n)]
  for u, v, w in edges:
    adj[u].append((v, w))
    adj[v].append((u, w))

  # Initialize distances with infinity
  inf = float('inf')
  dist = [inf] * n
  dist[src] = 0

  # Min-heap storing (current_distance, node)
  pq = [(0, src)]

  while pq:
    curr_dist, u = heapq.heappop(pq)

    # Skip stale entries if a shorter path to u was already found
    if curr_dist > dist[u]:
      continue

    for v, w in adj[u]:
      new_dist = curr_dist + w
      if new_dist < dist[v]:
        dist[v] = new_dist
        heapq.heappush(pq, (new_dist, v))

  # Replace unreachable (inf) nodes with -1
  return [-1 if d == inf else d for d in dist]