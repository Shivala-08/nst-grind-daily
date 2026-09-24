from collections import deque
import sys


def solve():
    input = sys.stdin.read
    data = input().split()
    if not data:
        return

    n = int(data[0])
    m = int(data[1])
    k = int(data[2])
    s = int(data[3])

    adj = [[] for _ in range(n + 1)]
    idx = 4
    for _ in range(m):
        u = int(data[idx])
        v = int(data[idx + 1])
        adj[u].append(v)
        adj[v].append(u)
        idx += 2

    # Distance array initialized to -1
    dist = [-1] * (n + 1)
    q = deque([s])
    dist[s] = 0

    # BFS traversal
    while q:
        curr = q.popleft()
        for neighbor in adj[curr]:
            if dist[neighbor] == -1:
                dist[neighbor] = dist[curr] + 1
                q.append(neighbor)

    # Collect all nodes at exact distance k
    result = []
    for i in range(1, n + 1):
        if dist[i] == k:
            result.append(i)

    # Output sorted results or -1 if none found
    if not result:
        print(-1)
    else:
        print(*(result))


if __name__ == "__main__":
    solve()