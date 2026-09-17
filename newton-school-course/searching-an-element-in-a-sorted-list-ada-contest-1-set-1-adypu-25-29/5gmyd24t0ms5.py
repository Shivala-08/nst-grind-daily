def isPresent(n, arr, x):
    low = 0
    high = n - 1
    
    while low <= high:
        mid = (low + high) // 2
        
        if arr[mid] == x:
            return 1
        elif arr[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
            
    return -1