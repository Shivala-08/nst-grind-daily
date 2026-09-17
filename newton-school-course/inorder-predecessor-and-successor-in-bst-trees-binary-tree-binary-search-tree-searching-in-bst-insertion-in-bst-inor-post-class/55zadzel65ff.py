'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''
def find_pre_suc(root, key):
    pre = -1
    suc = -1
    
    curr = root
    while curr:
        if curr.val < key:
            pre = curr.val
            curr = curr.right
        else:
            curr = curr.left
            
    curr = root
    while curr:
        if curr.val > key:
            suc = curr.val
            curr = curr.left
        else:
            curr = curr.right
            
    return [pre, suc]