import sys
import heapq

def solve():
    # Read all inputs from standard input
    input_data = sys.stdin.read().split()
    if not input_data:
        return

    iterator = iter(input_data)
    
    # Read number of test cases
    t_cases = int(next(iterator))

    for _ in range(t_cases):
        n = int(next(iterator))
        k = int(next(iterator))

        min_heap = []
        result = []

        for _ in range(n):
            val = int(next(iterator))

            # Maintain a min-heap of size up to K
            if len(min_heap) < k:
                heapq.heappush(min_heap, val)
            elif val > min_heap[0]:
                heapq.heapreplace(min_heap, val)

            # If heap has fewer than K elements, answer is -1
            if len(min_heap) < k:
                result.append("-1")
            else:
                # The root of the min-heap is the K-th largest element
                result.append(str(min_heap[0]))

        print(" ".join(result))

if __name__ == "__main__":
    solve()