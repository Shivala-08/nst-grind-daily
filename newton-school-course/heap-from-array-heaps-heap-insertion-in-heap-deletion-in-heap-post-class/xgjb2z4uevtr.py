def build_heap(values):
    def up_heapify(arr, i):
        parent = (i - 1) // 2
        while i > 0 and arr[i] > arr[parent]:
            arr[i], arr[parent] = arr[parent], arr[i]
            i = parent
            parent = (i - 1) // 2

    for i in range(len(values)):
        up_heapify(values, i)
        
    return values