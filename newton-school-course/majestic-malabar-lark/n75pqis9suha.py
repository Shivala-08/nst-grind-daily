def bins(arr,target,left,right):
    if left<right:
        return -1
    if arr[mid]==target:
        return mid
    elif arr[mid]>target:
        bins(arr,target,left,mid-1)
    else: