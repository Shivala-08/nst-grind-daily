'''
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
'''
,
def deleteFromBST(root, target):
 
    if root is None:
        return None


    if target > root.val:
        root.right = deleteFromBST(root.right, target)
    elif target < root.val:
        root.left = deleteFromBST(root.left, target)
        
    else:
        if root.left is None:
            return root.right
        elif root.right is None:
            return root.left

        
        temp = root.right
        while temp.left is not None:
            temp = temp.left
        root.val = temp.val


        root.right = deleteFromBST(root.right, temp.val)

    return root