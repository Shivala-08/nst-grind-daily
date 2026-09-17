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
        
        # Append current node's data
        path.append(node.data)
        
        # If it's a leaf node, format the path correctly and append
        if not node.left and not node.right:
            paths.append(" ".join(map(str, path)))
        else:
            dfs(node.left, path)
            dfs(node.right, path)
            
        # Backtrack
        path.pop()

    dfs(root, [])
    return paths