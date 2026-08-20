'''
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right 
'''    
def LCA(node, n1, n2):
    # Helper function to check if a value exists in the BST
    def search(curr, val):
        while curr:
            if curr.val == val:
                return True
            elif curr.val > val:
                curr = curr.left
            else:
                curr = curr.right
        return False

    # Check if both n1 and n2 are present in the tree
    if not search(node, n1) or not search(node, n2):
        return None

    # Find the Lowest Common Ancestor
    curr = node
    while curr:
        # If both values are smaller, LCA must be in the left subtree
        if curr.val > n1 and curr.val > n2:
            curr = curr.left
        # If both values are greater, LCA must be in the right subtree
        elif curr.val < n1 and curr.val < n2:
            curr = curr.right
        # If one is smaller/greater, or one matches the current node, we found the LCA
        else:
            return curr
            
    return None