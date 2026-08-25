'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''
def bst_to_sorted_list(root):
    dummy = Node(-1)
    prev = dummy

    def inorder(node):
        nonlocal prev
        if not node:
            return

        # 1. Traverse the left subtree
        inorder(node.left)

        # 2. Process current node
        prev.right = node
        node.left = None
        prev = node

        # 3. Traverse the right subtree
        inorder(node.right)

    inorder(root)
    return dummy.right