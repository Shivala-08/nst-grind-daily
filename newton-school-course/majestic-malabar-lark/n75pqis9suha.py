def sub(s,n):
    if len(s)==n:
        print(s)
        return
    sub(i,s+"0",n)
    if not s or s[-1] != "1":
        sub(s + "1", n)
sub("",3)