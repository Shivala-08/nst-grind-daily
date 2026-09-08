def findmax(arr,i=0):
    if i>=len(arr):
        return 0
    maxi = 0
    if arr[i]>maxi:
        maxi = arr[i]
    findmax(arr,i+1)
print(findmax([10,20,30,40],i=0))