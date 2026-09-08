def sub(i,s,n):
    if len(s)==n:
        print(s)
        return
    if s[i]=="1" and s[i-1]=="1":
        return 
    sub(i,s+"0",n)
    sub(i,s+"1",n)
sub(1,"",3)