def suma(arr):
    if len(arr)==0:
        return 0
    return arr[0]+suma(arr[1:])