from collections import defaultdict, deque
import sys


def solve():
    # Read all inputs from standard input
    input = sys.stdin.read
    data = input().split()

    if not data:
        return

    n = int(data[0])
    m = int(data[1])
    A = int(data[2])
    B = int(data[3])

    # If the start and destination are the same
    if A == B:
        print("YES")
        return

    # Build the adjacency list for the graph
    graph = defaultdict(list)
    idx = 4
    for _ in range(m):
        u = int(data[idx])
        v = int(data[idx + 1])
        graph[u].append(v)
        graph[v].append(u)
        idx += 2

    # BFS to find if B is reachable from A
    visited = [False] * (n + 1)
    queue = deque([A])
    visited[A] = True

    found = False
    while queue:
        curr = queue.popleft()

        if curr == B:
            found = True
            break

        for neighbor in graph[curr]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append(neighbor)

    if found:
        print("YES")
    else:
        print("NO")


if __name__ == "__main__":
    solve()