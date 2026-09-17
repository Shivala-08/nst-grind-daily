class Solution:
    def countSubtrees(self, root):
        self.count = 0
        
        def dfs(node):
            if not node:
                return (0, 0)
            
            left_ones, left_zeros = dfs(node.left)
            right_ones, right_zeros = dfs(node.right)
            
            total_ones = left_ones + right_ones + (1 if node.val == 1 else 0)
            total_zeros = left_zeros + right_zeros + (1 if node.val == 0 else 0)
            
            if total_ones > total_zeros:
                self.count += 1
                
            return (total_ones, total_zeros)
        
        dfs(root)
        return self.count