import sys

# Increase recursion depth just in case (though iterative DSU or path compression avoids deep recursion)
sys.setrecursionlimit(200_000)

def solve():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    
    iterator = iter(input_data)
    T = int(next(iterator))
    
    out = []
    for _ in range(T):
        N = int(next(iterator))
        M = int(next(iterator))
        
        parent = list(range(N + 1))
        size = [1] * (N + 1)
        
        def find(i):
            path = []
            while parent[i] != i:
                path.append(i)
                i = parent[i]
            for node in path:
                parent[node] = i
            return i

        def union(i, j):
            root_i = find(i)
            root_j = find(j)
            if root_i != root_j:
                if size[root_i] < size[root_j]:
                    root_i, root_j = root_j, root_i
                parent[root_j] = root_i
                size[root_i] += size[root_j]
                return size[root_i]
            return size[root_i]

        max_size = 1 if N > 0 else 0
        
        for _ in range(M):
            u = int(next(iterator))
            v = int(next(iterator))
            current_size = union(u, v)
            if current_size > max_size:
                max_size = current_size
                
        out.append(str(max_size))
        
    print('\n'.join(out))

if __name__ == '__main__':
    solve()