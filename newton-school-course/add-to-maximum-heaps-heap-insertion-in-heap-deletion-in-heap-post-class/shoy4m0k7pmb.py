import sys
import heapq

def solve():
    # Read all input from standard input
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    
    n = int(input_data[0])
    m = int(input_data[1])
    
    # Parse nums and operations
    nums = [int(x) for x in input_data[2:2+n]]
    operations = [int(x) for x in input_data[2+n:2+n+m]]
    
    # Create a max-heap by negating the values
    max_heap = [-num for num in nums]
    heapq.heapify(max_heap)
    
    # Process each operation
    for x in operations:
        # Pop the largest element (which is the smallest in our negative min-heap)
        current_max = -heapq.heappop(max_heap)
        
        # Add x to it
        new_val = current_max + x
        
        # Push the new value back into the heap
        heapq.heappush(max_heap, -new_val)
        
    # The answer is the maximum element remaining in the heap
    print(-max_heap[0])

if __name__ == '__main__':
    solve()