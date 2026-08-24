'''
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
'''
def deleteNode(root, key):
    # Base case: if the tree is empty or we haven't found the key
    if not root:
        return root

    # Traverse down the tree to find the node to delete
    if key < root.val:
        root.left = deleteNode(root.left, key)
    elif key > root.val:
        root.right = deleteNode(root.right, key)
    else:
        # Node to delete is found.
        
        # Case 1 & 2: Node has no children (leaf) or only one child
        if not root.left:
            return root.right
        elif not root.right:
            return root.left
            
        # Case 3: Node has two children
        # Find the inorder successor (smallest value in the right subtree)
        curr = root.right
        while curr.left:
            curr = curr.left
            
        # Replace the target node's value with the inorder successor's value
        root.val = curr.val
        
        # Recursively delete the inorder successor from the right subtree
        root.right = deleteNode(root.right, root.val)

    return root