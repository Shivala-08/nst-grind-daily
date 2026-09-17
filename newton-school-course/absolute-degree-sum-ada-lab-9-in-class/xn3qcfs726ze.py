def sumOfAbsoluteDegreeDiff(n, edgeList):
    # Initialize arrays to store in-degrees and out-degrees for each vertex
    in_degree = [0] * n
    out_degree = [0] * n
    
    # Calculate degrees based on the edges
    for u, v in edgeList:
        out_degree[u] += 1
        in_degree[v] += 1
        
    # Calculate the sum of absolute differences
    total_sum = 0
    for i in range(n):
        total_sum += abs(in_degree[i] - out_degree[i])
        
    return total_sum