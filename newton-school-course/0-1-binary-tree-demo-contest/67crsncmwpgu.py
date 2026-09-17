# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def countSubtrees(self, root):
        self.count = 0
        
        def dfs(node):
            if not node:
                return (0, 0) # (count of 1s, count of 0s)
            
            # Recurse left and right subtrees
            left_ones, left_zeros = dfs(node.left)
            right_ones, right_zeros = dfs(node.right)
            
            # Calculate total 1s and 0s for the current subtree
            total_ones = left_ones + right_ones + (1 if node.val == 1 else 0)
            total_zeros = left_zeros + right_zeros + (1 if node.val == 0 else 0)
            
            # Check if 1s are strictly greater than 0s
            if total_ones > total_zeros:
                self.count += 1
                
            return (total_ones, total_zeros)
        
        dfs(root)
        return self.count