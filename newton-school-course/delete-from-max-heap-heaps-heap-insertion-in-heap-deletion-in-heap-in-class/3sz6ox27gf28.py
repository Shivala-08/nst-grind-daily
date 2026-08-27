def delete_from_heap(heap):
    if not heap:
        return None
    

    max_val = heap[0]
    
    
    if len(heap) == 1:
        heap.pop()
        return max_val

    heap[0] = heap.pop()
    
    n = len(heap)
    i = 0
    
    while True:
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2
        

        if left < n and heap[left] > heap[largest]:
            largest = left
            
        if right < n and heap[right] > heap[largest]:
            largest = right
            
        if largest != i:
            heap[i], heap[largest] = heap[largest], heap[i]
            i = largest
        else:
            break
            
    return max_val