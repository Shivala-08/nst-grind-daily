'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''
'''
class Node:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
'''

def find_floor_ceil(root, x):
    floor = -1
    ceil = -1
    
    curr = root
    while curr:
        if curr.val == x:
            floor = curr.val
            ceil = curr.val
            return [floor, ceil]
        
        if curr.val < x:
            floor = curr.val  # Potential floor candidate
            curr = curr.right
        else:
            ceil = curr.val   # Potential ceiling candidate
            curr = curr.left
            
    return [floor, ceil]