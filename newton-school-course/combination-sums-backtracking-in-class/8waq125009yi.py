def combinationSum(nums, target):
    res = []
    nums.sort()
    
    def backtrack(start, path, target_left):
        if target_left == 0:
            res.append(path[:])
            return
            
        for i in range(start, len(nums)):
            # If the current number exceeds the remaining target, break 
            # (since the array is sorted, all subsequent numbers will too)
            if target_left - nums[i] < 0:
                break
                
            path.append(nums[i])
            # Pass 'i' instead of 'i + 1' because we can reuse the same element
            backtrack(i, path, target_left - nums[i])
            path.pop()
            
    backtrack(0, [], target)
    return res