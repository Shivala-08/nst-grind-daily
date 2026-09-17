'''
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
'''
def sortedArrayToBST(nums):
    def helper(left, right):
        if left > right:
            return None
        
        # Find the middle element to maintain a balanced tree
        mid = (left + right) // 2
        root = TreeNode(nums[mid])
        
        # Recursively construct the left and right subtrees
        root.left = helper(left, mid - 1)
        root.right = helper(mid + 1, right)
        
        return root
        
    # Call the helper function with the full bounds of the array
    return helper(0, len(nums) - 1)