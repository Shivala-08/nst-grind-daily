from collections import deque

def bfsOfGraph(n, edges, src):
    # Step 1: Build the adjacency list
    adj = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
    
    # Optional: Sort neighbors to ensure a deterministic visit order 
    # (if the problem expects ascending order for tied nodes)
    for i in range(n):
        adj[i].sort()

    visited = [False] * n
    bfs_result = []
    
    # Step 2: Initialize queue and start BFS from src
    queue = deque([src])
    visited[src] = True
    
    while queue:
        node = queue.popleft()
        bfs_result.append(node)
        
        # Traverse all adjacent nodes
        for neighbor in adj[node]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append(neighbor)
                
    return bfs_result