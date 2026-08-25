'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''
import sys

sys.setrecursionlimit(200000)


def bst_to_sorted_list(root):
    dummy = Node(-1)
    prev = dummy

    def inorder(node):
        nonlocal prev
        if not node:
            return

        inorder(node.left)

        prev.right = node
        node.left = None
        prev = node

        inorder(node.right)

    inorder(root)
    return dummy.right