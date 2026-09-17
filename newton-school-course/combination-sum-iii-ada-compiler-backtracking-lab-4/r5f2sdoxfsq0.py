def combinationSum3(k, n):
    res = []
    
    def backtrack(start, current_sum, comb):
        if len(comb) == k and current_sum == n:
            res.append(list(comb))
            return
        # Stop exploring if we exceed k numbers or the target sum n
        if len(comb) >= k or current_sum >= n:
            return
        
        for i in range(start, 10):
            comb.append(i)
            backtrack(i + 1, current_sum + i, comb)
            comb.pop()
            
    backtrack(1, 0, [])
    return res