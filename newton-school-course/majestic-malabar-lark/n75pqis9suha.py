def countdown(n):
    if n==0:
        return 0
    print(n)
    countdown(n-1)
countdown(5)