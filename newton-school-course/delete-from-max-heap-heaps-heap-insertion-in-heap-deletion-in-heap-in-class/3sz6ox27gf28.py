def delete_from_heap(heap):
    if not heap:
        return None
    

    max_val = heap[0]
    
    # If there's only one element, remove it and return
    if len(heap) == 1:
        heap.pop()
        return max_val
    
    # Move the last element to the root position
    heap[0] = heap.pop()
    
    # Down-heapify process starting from index 0
    n = len(heap)
    i = 0
    
    while True:
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2
        
        # Check if left child exists and is greater than current largest
        if left < n and heap[left] > heap[largest]:
            largest = left
            
        # Check if right child exists and is greater than current largest
        if right < n and heap[right] > heap[largest]:
            largest = right
            
        # If the largest element is not the current root, swap and continue down
        if largest != i:
            heap[i], heap[largest] = heap[largest], heap[i]
            i = largest
        else:
            break
            
    return max_val