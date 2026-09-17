def combinationSum3(k, n):
    result = []
    
    def backtrack(start_num, current_combination, current_sum):
        # Base case: if we have exactly k numbers and they sum to n
        if len(current_combination) == k and current_sum == n:
            result.append(list(current_combination))
            return
        
        # If we've exceeded the length or the sum, stop exploring this path
        if len(current_combination) >= k or current_sum > n:
            return
            
        # Try adding numbers from start_num up to 9
        for i in range(start_num, 10):
            current_combination.append(i)
            # Recurse with the next number (i + 1) and updated sum
            backtrack(i + 1, current_combination, current_sum + i)
            # Backtrack: remove the last added number to try the next one
            current_combination.pop()
            
    backtrack(1, [], 0)
    return result