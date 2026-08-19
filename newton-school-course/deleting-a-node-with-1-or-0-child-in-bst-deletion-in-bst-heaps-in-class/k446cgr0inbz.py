'''
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
'''

def deleteFromBST(root, target):
    # Base case: if the tree is empty or we haven't found the target
    if root is None:
        return None

    # Search for the target node
    if target > root.val:
        root.right = deleteFromBST(root.right, target)
    elif target < root.val:
        root.left = deleteFromBST(root.left, target)
        
    # Target node found
    else:
        # Case 1 & 2: Node has 0 or 1 child
        if root.left is None:
            return root.right
        elif root.right is None:
            return root.left

        # Case 3: Node has 2 children
        # Find the inorder successor (smallest node in the right subtree)
        temp = root.right
        while temp.left is not None:
            temp = temp.left

        # Replace target's value with the inorder successor's value
        root.val = temp.val

        # Recursively delete the inorder successor from the right subtree
        root.right = deleteFromBST(root.right, temp.val)

    return root