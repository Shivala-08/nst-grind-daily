def fact(n,i=0):
    if i>n:
        return 1
    print(i)
    return i*(fact(n,i+1))
print(fact(4,0))