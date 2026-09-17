def insert_into_heap(heap, x):
    # Append the new element at the end of the heap
    heap.append(x)
    
    # Get the index of the newly added element
    currentIndex = len(heap) - 1
    
    # Perform up-heapify (bottom-to-top swapping)
    while currentIndex > 0:
        parentIndex = (currentIndex - 1) // 2
        
        # If the current element is greater than its parent, swap them
        if heap[currentIndex] > heap[parentIndex]:
            heap[currentIndex], heap[parentIndex] = heap[parentIndex], heap[currentIndex]
            currentIndex = parentIndex
        else:
            break
            
    return heap