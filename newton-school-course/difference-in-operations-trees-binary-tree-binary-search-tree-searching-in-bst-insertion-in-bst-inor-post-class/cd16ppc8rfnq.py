'''
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
'''
def calculateDifference(root):
    if not root:
        return 0
    
    # In a Binary Search Tree, the minimum element can be found by traversing to the leftmost node
    curr = root
    while curr.left:
        curr = curr.left
    min_val = curr.val
    
    # The maximum element can be found by traversing to the rightmost node
    curr = root
    while curr.right:
        curr = curr.right
    max_val = curr.val
    
    product = max_val * min_val
    total_sum = max_val + min_val
    
    return product - total_sum