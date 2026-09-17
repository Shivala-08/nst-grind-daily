def quick_sort(nums, lo, hi):
    if lo >= hi:
        return
        
    # Use the middle element as the pivot to avoid worst-case performance on sorted arrays
    pivot = nums[(lo + hi) // 2]
    i = lo - 1
    j = hi + 1
    
    # Hoare's partition scheme
    while True:
        i += 1
        while nums[i] < pivot:
            i += 1
            
        j -= 1
        while nums[j] > pivot:
            j -= 1
            
        if i >= j:
            break
            
        # Swap elements out of place
        nums[i], nums[j] = nums[j], nums[i]
        
    # Recursively sort the two partitions
    quick_sort(nums, lo, j)
    quick_sort(nums, j + 1, hi)