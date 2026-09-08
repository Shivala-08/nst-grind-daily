def subsets(arr,i,current):
    if i==len(arr):
        print(current)
        return
    current.append(i)
    subsets(arr,i+1,current)
    current.pop()
    subsets(arr,i+1,current)
arr = [1,2,3]
subsets(arr,0,current)