from collections import deque

'''
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
'''

def printTopView(root):
    if not root:
        return
    
    # Dictionary to store the top-most node at each horizontal distance
    top_view_map = {}
    
    # Queue stores tuples of (node, horizontal_distance)
    queue = deque([(root, 0)])
    
    min_hd = 0
    max_hd = 0
    
    while queue:
        node, hd = queue.popleft()
        
        # If this is the first time we are seeing this horizontal distance, record the node
        if hd not in top_view_map:
            top_view_map[hd] = node.data
        
        # Track minimum and maximum horizontal distances for printing later
        min_hd = min(min_hd, hd)
        max_hd = max(max_hd, hd)
        
        # Push left child with HD - 1
        if node.left:
            queue.append((node.left, hd - 1))
            
        # Push right child with HD + 1
        if node.right:
            queue.append((node.right, hd + 1))
            
    # Print the top view nodes from the leftmost horizontal distance to the rightmost
    result = []
    for hd in range(min_hd, max_hd + 1):
        if hd in top_view_map:
            result.append(str(top_view_map[hd]))
            
    print(" ".join(result))