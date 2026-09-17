import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []
        
    def push(self, x):
        heapq.heappush(self.heap, x)
        
    def getMin(self):
        if self.heap:
            return self.heap[0]
        return -1
        
    def pop(self):
        if self.heap:
            return heapq.heappop(self.heap)
        return -1