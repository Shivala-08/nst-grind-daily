def powe(a,b):
    if b==0:
        return 1
    return a*powe(a,b-1)
print(powe(2,4))