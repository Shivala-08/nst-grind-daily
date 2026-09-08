def suma(arr,i):
    if len(arr)==0:
        return 0
    return arr[0]+suma(arr[1:])
print(suma([10,20,30,40]))