def sub(arr,i,current):
    if i==len(arr):
        print(current)
        return 
    current.append(arr[i])
    sub(arr,i+1,current)
    current.pop()
    sub(arr,i+1,current)