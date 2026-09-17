import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []

    def push(self, x):
        # Push the negative value to simulate a Max-Heap using Python's Min-Heap
        heapq.heappush(self.heap, -x)

    def getMax(self):
        if self.heap:
            # The maximum element is at the root (index 0), negated back to positive
            return -self.heap[0]
        return None

    def pop(self):
        if self.heap:
            # Pop the root and negate it back to its original positive value
            return -heapq.heappop(self.heap)
        return None

    def empty(self):
        return len(self.heap) == 0

    def size(self):
        return len(self.heap)