def count_selection_sort_swaps():
    import sys
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    
    n = int(input_data[0])
    arr = [int(x) for x in input_data[1:n+1]]
    
    swap_count = 0
    
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        # Only increment swap count and perform the swap if the minimum element 
        # is not already at its correct position
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
            swap_count += 1
            
    print(swap_count)

if __name__ == '__main__':
    count_selection_sort_swaps()