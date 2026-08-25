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

    # Newton School uses root.data instead of root.val
    if root.data < low:
        return trimBST(root.right, low, high)

    if root.data > high:
        return trimBST(root.left, low, high)

    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)

    return root