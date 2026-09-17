'''
class Node:
    def __init__(self, x):
        self.data = x
        self.next = None
'''



def sizeOfLinkedList(head):
    count = 0
    current = head
    
    while current is not None:
        count += 1
        current = current.next
        
    return count