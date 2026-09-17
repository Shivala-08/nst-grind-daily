def adjLst():
    adj_list = {
        0: [1, 2, 4],
        1: [0, 3, 4],
        2: [0, 3],
        3: [1, 2],
        4: [0, 1]
    }
    return adj_list