'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''

def trim_bst(root, low, high):
    if root is None:
        return None

    # Current node is too small
    if root.val < low:
        return trim_bst(root.right, low, high)

    # Current node is too large
    if root.val > high:
        return trim_bst(root.left, low, high)

    # Current node is valid
    root.left = trim_bst(root.left, low, high)
    root.right = trim_bst(root.right, low, high)

    return root