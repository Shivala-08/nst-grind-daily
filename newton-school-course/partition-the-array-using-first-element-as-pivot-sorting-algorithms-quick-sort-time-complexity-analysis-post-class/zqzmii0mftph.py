def partition_array(arr, lo, hi):
    # The pivot is the first element
    pivot = arr[lo]
    
    # i will track the boundary of elements smaller than the pivot
    i = lo + 1
    
    # Scan the array from left to right
    for j in range(lo + 1, hi + 1):
        if arr[j] < pivot:
            # Swap current element with the element at the boundary
            arr[i], arr[j] = arr[j], arr[i]
            # Move the boundary forward
            i += 1
            
    # Finally, place the pivot in its correct position 
    # by swapping it with the last smaller element
    arr[lo], arr[i - 1] = arr[i - 1], arr[lo]
    
    pivot_index = i - 1
    
    # The comment in the editor asks to return a tuple
    return arr, pivot_index