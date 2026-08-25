'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''

def trimBST(root, low, high):
    if not root:
        return None

    # If the current node value is less than low, 
    # then its left subtree is also completely out of range.
    if root.val < low:
        return trimBST(root.right, low, high)

    # If the current node value is greater than high, 
    # then its right subtree is also completely out of range.
    if root.val > high:
        return trimBST(root.left, low, high)

    # If node is within [low, high], recursively trim left and right subtrees.
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)

    return root