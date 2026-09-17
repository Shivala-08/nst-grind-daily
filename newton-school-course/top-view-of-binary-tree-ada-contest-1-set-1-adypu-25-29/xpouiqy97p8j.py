from collections import deque

def printTopView(root):
    if not root:
        return
    
    top_view_map = {}
    queue = deque([(root, 0)])
    min_hd = 0
    max_hd = 0
    
    while queue:
        node, hd = queue.popleft()
        
        if hd not in top_view_map:
            top_view_map[hd] = node.data
        
        min_hd = min(min_hd, hd)
        max_hd = max(max_hd, hd)
        
        if node.left:
            queue.append((node.left, hd - 1))
            
        if node.right:
            queue.append((node.right, hd + 1))
            
    result = []
    for hd in range(min_hd, max_hd + 1):
        if hd in top_view_map:
            result.append(str(top_view_map[hd]))
            
    print(" ".join(result), end="")