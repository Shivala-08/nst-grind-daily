import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    
    t = int(input_data[0])
    idx = 1
    
    results = []
    for _ in range(t):
        if idx >= len(input_data):
            break
        n = int(input_data[idx])
        target = int(input_data[idx+1])
        idx += 2
        
        nums = []
        for _ in range(n):
            nums.append(int(input_data[idx]))
            idx += 1
            
        found = False
        # Brute-force through all triplets (i, j, k)
        for i in range(n):
            for j in range(i + 1, n):
                for k in range(j + 1, n):
                    if nums[i] + nums[j] + nums[k] == target:
                        found = True
                        break
                if found:
                    break
            if found:
                break
                
        results.append("YES" if found else "NO")
        
    print('\n'.join(results))

if __name__ == '__main__':
    solve()