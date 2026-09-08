def suma(arr,i=0):
    if i>=len(arr):
        return 0
    return arr[i]+suma()