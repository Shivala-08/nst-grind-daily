def sub(s,n):
    if len(s)==n:
        print(s)
        return
    if s[-1]=="1":
        sub(s+"0",n)
    else:
        sub(s+"1",n)
sub("",3)