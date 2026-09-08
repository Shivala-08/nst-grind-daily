arr = list(map(int,input().split()))
n = len(arr)
high = n-1
low = 0
while low<=high:
    mid  = (high+low)//2
    if