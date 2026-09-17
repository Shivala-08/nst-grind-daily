'''
class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right
'''

def rootToLeafPaths(root):
    result = []
    
    def dfs(node, current_path):
        if not node:
            return
        
        # Add the current node's data to the path
        current_path.append(str(node.data))
        
        # If it's a leaf node, join the path and add to results
        if not node.left and not node.right:
            result.append(" ".join(current_path))
        else:
            # Recursively traverse left and right subtrees
            dfs(node.left, current_path)
            dfs(node.right, current_path)
            
        # Backtrack by removing the current node before returning to parent
        current_path.pop()
        
    dfs(root, [])
    return result