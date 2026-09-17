class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def countSubtrees(self, root: TreeNode) -> int:
        self.valid_subtrees = 0
        
        def dfs(node):
            if not node:
                return [0, 0] # [count_ones, count_zeros]
            
            left_ones, left_zeros = dfs(node.left)
            right_ones, right_zeros = dfs(node.right)
            
            total_ones = left_ones + right_ones + (1 if node.val == 1 else 0)
            total_zeros = left_zeros + right_zeros + (1 if node.val == 0 else 0)
            
            if total_ones > total_zeros:
                self.valid_subtrees += 1
                
            return [total_ones, total_zeros]
        
        dfs(root)
        return self.valid_subtrees