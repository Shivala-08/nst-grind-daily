def adjLst():
    # Adjacency list representation where index corresponds to the node
    adjacency_list = [
        [1, 2, 4],  # neighbors of node 0
        [0, 3, 4],  # neighbors of node 1
        [0, 3],     # neighbors of node 2
        [1, 2],     # neighbors of node 3
        [0, 1]      # neighbors of node 4
    ]
    return adjacency_list