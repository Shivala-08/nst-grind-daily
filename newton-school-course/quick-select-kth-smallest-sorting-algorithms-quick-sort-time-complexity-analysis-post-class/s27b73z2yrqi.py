import random

def kth_smallest(arr, k):
    # Convert 1-based k to 0-based index
    target = k - 1
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        # Choose a random pivot to avoid worst-case O(N^2) time complexity
        pivot_idx = random.randint(left, right)
        # Move pivot to the end
        arr[pivot_idx], arr[right] = arr[right], arr[pivot_idx]
        
        pivot = arr[right]
        i = left
        
        # Partition array around the pivot
        for j in range(left, right):
            if arr[j] < pivot:
                arr[i], arr[j] = arr[j], arr[i]
                i += 1
                
        # Move pivot to its final sorted place
        arr[i], arr[right] = arr[right], arr[i]
        
        # Check if the pivot is at our target index
        if i == target:
            return arr[i]
        elif i < target:
            # The Kth smallest is in the right partition
            left = i + 1
        else:
            # The Kth smallest is in the left partition
            right = i - 1
            
    return -1