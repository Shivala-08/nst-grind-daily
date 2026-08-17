'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''

def search_in_bst(root, key):
    # Traverse the tree while the current node is not None
    current = root
    
    while current is not None:
        if current.val == key:
            # Key found
            return 1
        elif key < current.val:
            # Key is smaller, search in the left subtree
            current = current.left
        else:
            # Key is larger, search in the right subtree
            current = current.right
            
    # Key was not found in the tree
    return 0