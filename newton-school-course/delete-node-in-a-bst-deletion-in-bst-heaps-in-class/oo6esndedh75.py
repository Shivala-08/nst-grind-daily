'''
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
'''
def deleteNode(root, key):
    
    if not root:
        return root

    
    if key < root.val:
        root.left = deleteNode(root.left, key)
    elif key > root.val:
        root.right = deleteNode(root.right, key)
    else:
        
        if not root.left:
            return root.right
        elif not root.right:
            return root.left
            
        
        curr = root.right
        while curr.left:
            curr = curr.left
            
        # Replace the target node's value with the inorder successor's value
        root.val = curr.val
        
        # Recursively delete the inorder successor from the right subtree
        root.right = deleteNode(root.right, root.val)

    return root