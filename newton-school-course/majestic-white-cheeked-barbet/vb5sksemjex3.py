def suma(arr,tar,i):
    if i==len(arr)-1:
        return arr[-1]
    rest = suma(arr,tar,i)