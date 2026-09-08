def sub(s,n):
    if len(s)==n:
        print(s)
        return
    sub(s+"0",n)
    sub(s+"1",n)
sub("",2)