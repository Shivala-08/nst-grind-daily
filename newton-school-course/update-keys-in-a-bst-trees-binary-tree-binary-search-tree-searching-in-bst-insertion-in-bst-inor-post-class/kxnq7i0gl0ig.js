'''
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right 
'''    
def updateBST(root):
    # Helper function to perform reverse in-order traversal
    def reverse_inorder(node):
        nonlocal total_sum
        if not node:
            return
        
        # Traverse the right subtree first (greater values)
        reverse_inorder(node.right)
        
        # Update the current node's value with the running sum
        total_sum += node.val
        node.val = total_sum
        
        # Traverse the left subtree (smaller values)
        reverse_inorder(node.left)

    total_sum = 0
    reverse_inorder(root)
    return root