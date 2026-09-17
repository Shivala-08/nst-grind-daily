def combinationSum3(k, n):
    res = []
    
    def backtrack(start, current_comb, current_sum):
        # Base case: if combination length is k and sum is n, we found a valid combination
        if len(current_comb) == k and current_sum == n:
            res.append(list(current_comb))
            return
            
        # Optimization/Base case: if length exceeds k or sum exceeds n, stop exploring
        if len(current_comb) >= k or current_sum > n:
            return
            
        # Try numbers from 'start' to 9
        for i in range(start, 10):
            current_comb.append(i)
            backtrack(i + 1, current_comb, current_sum + i)
            current_comb.pop() # Backtrack
            
    backtrack(1, [], 0)
    return res