'''
class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right
'''
def rootToLeafPaths(root):
    paths = []

    def dfs(node, path):
        if not node:
            return
        
        # Append current node's data to the path
        path.append(str(node.data))
        
        # If it's a leaf node, collect the path
        if not node.left and not node.right:
            paths.append(" ".join(path))
        else:
            # Continue traversal for left and right children
            dfs(node.left, path)
            dfs(node.right, path)
            
        # Backtrack
        path.pop()

    dfs(root, [])
    return paths