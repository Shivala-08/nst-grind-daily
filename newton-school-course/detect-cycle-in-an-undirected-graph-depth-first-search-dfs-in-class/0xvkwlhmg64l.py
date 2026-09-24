from collections import deque

def isCyclic(n, edges):
    # Build the adjacency list
    adj = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
        
    visited = [False] * n
    
    # Check for cycles in all components (in case the graph is disconnected)
    for i in range(n):
        if not visited[i]:
            # BFS queue stores: (current_node, parent_node)
            queue = deque([(i, -1)])
            visited[i] = True
            
            while queue:
                node, parent = queue.popleft()
                
                for neighbor in adj[node]:
                    if not visited[neighbor]:
                        visited[neighbor] = True
                        queue.append((neighbor, node))
                    elif neighbor != parent:
                        # If the neighbor is visited and not the parent, a cycle exists
                        return True
                        
    return False