def count_pivots(arr, n):
    if n == 0:
        return 0
    if n == 1:
        return 1
        
    # Precompute the minimums from the right side (suffix minimums)
    suffix_min = [0] * n
    suffix_min[n - 1] = arr[n - 1]
    
    for i in range(n - 2, -1, -1):
        suffix_min[i] = min(suffix_min[i + 1], arr[i])
        
    count = 0
    # Keep track of the maximum value seen so far from the left
    current_max = -1 
    
    for i in range(n):
        # 1. Check if the element is strictly greater than all elements to its left
        is_greater_than_left = (i == 0) or (arr[i] > current_max)
        
        # 2. Check if the element is strictly smaller than all elements to its right
        is_smaller_than_right = (i == n - 1) or (arr[i] < suffix_min[i + 1])
        
        # If both conditions are met, it is a potential pivot
        if is_greater_than_left and is_smaller_than_right:
            count += 1
            
        # Update the maximum from the left
        current_max = max(current_max, arr[i])
        
    return count