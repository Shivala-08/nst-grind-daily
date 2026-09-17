def convertToAdjList(n, edgeList):
    # Initialize adjacency list with empty lists for each vertex
    adj_list = [[] for _ in range(n)]
    
    # Since the graph is undirected, add each edge in both directions
    for u, v in edgeList:
        adj_list[u].append(v)
        adj_list[v].append(u)
        
    return adj_list