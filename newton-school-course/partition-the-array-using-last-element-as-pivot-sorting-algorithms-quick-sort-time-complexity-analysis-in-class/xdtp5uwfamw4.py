def partition_array(arr, lo, hi):
    # Choose the last element as the pivot
    pivot = arr[hi]
    
    # Index of the smaller element
    i = lo - 1
    
    # Traverse through all elements
    # compare them with the pivot
    for j in range(lo, hi):
        if arr[j] <= pivot:
            # If element smaller than or equal to pivot is found
            # swap it with the greater element pointed by i
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
            
    # Swap the pivot element with the greater element specified by i
    arr[i + 1], arr[hi] = arr[hi], arr[i + 1]
    
    # Return the position from where partition is done
    return i + 1