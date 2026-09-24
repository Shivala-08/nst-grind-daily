from collections import deque
import sys


def solve():
    input = sys.stdin.read
    data = input().split()
    if not data:
        return

    n = int(data[0])
    m = int(data[1])
    a = int(data[2])
    b = int(data[3])

    adj = [[] for _ in range(n + 1)]
    idx = 4
    for _ in range(m):
        u = int(data[idx])
        v = int(data[idx + 1])
        adj[u].append(v)
        adj[v].append(u)
        idx += 2

    # Function to compute shortest paths using BFS
    def bfs(start):
        dist = [-1] * (n + 1)
        queue = deque([start])
        dist[start] = 0

        while queue:
            u = queue.popleft()
            for v in adj[u]:
                if dist[v] == -1:
                    dist[v] = dist[u] + 1
                    queue.append(v)
        return dist

    distA = bfs(a)
    distB = bfs(b)

    result = []
    for i in range(1, n + 1):
        # A node is valid if it's reachable from both and distances are equal
        if distA[i] != -1 and distB[i] != -1 and distA[i] == distB[i]:
            result.append(i)

    if not result:
        print("-1")
    else:
        print(*(result))


if __name__ == "__main__":
    solve()