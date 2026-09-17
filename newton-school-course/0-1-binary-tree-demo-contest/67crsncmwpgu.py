class Solution:
    def countSubtrees(self, root):
        self.count = 0
        
        def dfs(node):
            if not node:
                return (0, 0)  # (count of 1s, count of 0s)
            
            # Recurse left and right subtrees
            left_ones, left_zeros = dfs(node.left)
            right_ones, right_zeros = dfs(node.right)
            
            # Calculate total 1s and 0s for the current subtree
            total_ones = left_ones + right_ones + (1 if node.val == 1 else 0)
            total_zeros = left_zeros + right_zeros + (1 if node.val == 0 else 0)
            
            # Print to check the values at each node/subtree
            print(f"Node value: {node.val}, Total 1s: {total_ones}, Total 0s: {total_zeros}")
            
            # Check condition (change to == or > depending on your exact problem requirements)
            if total_ones == total_zeros:
                self.count += 1
                
            return (total_ones, total_zeros)
        
        dfs(root)
        print("Final count:", self.count)
        return self.count