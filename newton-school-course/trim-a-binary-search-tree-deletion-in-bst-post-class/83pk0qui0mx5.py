'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''

def delete_node(root, key):
    if not root:
        return None

    # Search for the node to delete
    if key < root.val:
        root.left = delete_node(root.left, key)
    elif key > root.val:
        root.right = delete_node(root.right, key)
    else:
        # Node with only one child or no child
        if not root.left:
            return root.right
        elif not root.right:
            return root.left

        # Node with two children: replace with inorder predecessor (max in left subtree)
        curr = root.left
        while curr.right:
            curr = curr.right
        
        # Replace value with inorder predecessor's value
        root.val = curr.val
        
        # Recursively delete the inorder predecessor from left subtree
        root.left = delete_node(root.left, curr.val)

    return root