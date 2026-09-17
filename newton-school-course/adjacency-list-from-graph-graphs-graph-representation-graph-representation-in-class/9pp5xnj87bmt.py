def adjLst():
    # Based on the graph image provided:
    # Nodes: 0, 1, 2, 3, 4
    # Edges:
    # 0 is connected to: 1, 2, 4
    # 1 is connected to: 0, 3, 4
    # 2 is connected to: 0, 3
    # 3 is connected to: 1, 2
    # 4 is connected to: 0, 1
    
    adj_list = {
        0: [1, 2, 4],
        1: [0, 3, 4],
        2: [0, 3],
        3: [1, 2],
        4: [0, 1]
    }
    return adj_list