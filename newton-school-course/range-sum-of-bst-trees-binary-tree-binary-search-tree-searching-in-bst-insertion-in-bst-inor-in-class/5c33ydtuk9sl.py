'''
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right 
'''    
def rangeSumBST(root, low, high):
    # Base case: if the node is null, return 0
    if not root:
        return 0
    
    # If the current node's value is less than the lower bound,
    # the entire left subtree will also be less. 
    # So, we only need to search the right subtree.
    if root.val < low:
        return rangeSumBST(root.right, low, high)
    
    # If the current node's value is greater than the upper bound,
    # the entire right subtree will also be greater.
    # So, we only need to search the left subtree.
    elif root.val > high:
        return rangeSumBST(root.left, low, high)
    
    # If the current node is within the range, add its value 
    # and recursively sum both the left and right subtrees.
    else:
        return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)