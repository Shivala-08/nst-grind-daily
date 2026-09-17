def is_max_heap(arr):
    n = len(arr)
    # We only need to check nodes that have at least one child.
    # In 0-indexed binary heaps, the internal nodes range from 0 to (n - 2) // 2.
    for i in range((n - 2) // 2 + 1):
        left = 2 * i + 1
        right = 2 * i + 2
        
        # Check if left child exists and is greater than the parent
        if left < n and arr[left] > arr[i]:
            return False
            
        # Check if right child exists and is greater than the parent
        if right < n and arr[right] > arr[i]:
            return False
            
    return True