import sys

# Increase recursion depth just in case (though N <= 20 is very small)
sys.setrecursionlimit(2000)

def solve():
    input = sys.stdin.read
    data = input().split()
    
    if not data:
        return
        
    N = int(data[0])
    K = int(data[1])
    
    A = [int(x) for x in data[2:N+2]]
    
    # DFS to check if we can reach target K
    def dfs(index, current_sum):
        # Base case: if we have used all numbers
        if index == N:
            return current_sum == K
            
        # Try adding the next number
        if dfs(index + 1, current_sum + A[index]):
            return True
            
        # Try subtracting the next number
        if dfs(index + 1, current_sum - A[index]):
            return True
            
        return False

    # Start DFS with the first element and index 1
    if dfs(1, A[0]):
        print("YES")
    else:
        print("NO")

if __name__ == '__main__':
    solve()