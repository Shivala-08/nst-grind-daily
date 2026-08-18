'''
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
'''
'''
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
'''

def isBST(root):
    # Helper function to validate the tree with min and max boundaries
    def validate(node, low, high):
        # An empty node is valid
        if not node:
            return True
        
        # The current node's value must be strictly between low and high
        if not (low < node.val < high):
            return False
        
        # Recursively validate the left subtree (max bound becomes current node's value)
        # and the right subtree (min bound becomes current node's value)
        return validate(node.left, low, node.val) and validate(node.right, node.val, high)
        
    # Initialize with infinity boundaries
    return validate(root, float('-inf'), float('inf'))