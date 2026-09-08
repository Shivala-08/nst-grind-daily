def suma(arr,i=0):
    if i>=len(arr):
        return 0
    i+=1
    return arr[i]+suma()