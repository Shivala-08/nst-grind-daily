arr = list(map(int,input().split()))
x = int(input())
n = len(arr)
high = n-1
low = 0
while low<=high:
    mid  = (high+low)//2
    if arr[mid]==x:
        print(x)
    elif arr[mid]>x:
        low = mid+1
    else:
        high = mid-1