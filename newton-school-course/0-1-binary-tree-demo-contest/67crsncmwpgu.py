# Definition for a binary tree node.
# class Node:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def countSubtrees(self, root):
        self.valid_subtrees = 0
        
        def dfs(node):
            if not node:
                return 0, 0  # (count_ones, count_zeros)
            
            # Recurse left and right subtrees
            left_ones, left_zeros = dfs(node.left)
            right_ones, right_zeros = dfs(node.right)
            
            # Current node values
            current_ones = 1 if node.val == 1 else 0
            current_zeros = 1 if node.val == 0 else 0
            
            # Total ones and zeros in the current subtree
            total_ones = left_ones + right_ones + current_ones
            total_zeros = left_zeros + right_zeros + current_zeros
            
            # Check the condition (ones > zeros)
            if total_ones > total_zeros:
                self.valid_subtrees += 1
                
            return total_ones, total_zeros
        
        dfs(root)
        return self.valid_subtrees