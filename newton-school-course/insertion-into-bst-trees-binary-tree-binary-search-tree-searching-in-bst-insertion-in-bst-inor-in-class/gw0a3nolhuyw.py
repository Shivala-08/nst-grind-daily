'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''
def insertIntoBST(root, val):
    # If the tree is empty, the new node becomes the root
    if not root:
        return Node(val)
        
    current = root
    
    # Traverse the tree to find the correct insertion spot
    while True:
        if val < current.val:
            # If there is a left child, keep going left
            if current.left:
                current = current.left
            # If no left child, insert the new node here
            else:
                current.left = Node(val)
                break
        else:
            # If there is a right child, keep going right
            if current.right:
                current = current.right
            # If no right child, insert the new node here
            else:
                current.right = Node(val)
                break
                
    # Return the original root of the tree
    return root