'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''

def search(root, key):
    # Base case: if the tree or subtree is empty, or we found the key
    if root is None:
        return 0
    
    if root.val == key:
        return 1
        
    # Recursively search in the left and right subtrees
    if search(root.left, key) == 1 or search(root.right, key) == 1:
        return 1
        
    return 0