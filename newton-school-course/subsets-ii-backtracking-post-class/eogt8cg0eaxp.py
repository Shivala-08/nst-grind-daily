def subsetsWithDup(nums):
    res = []
    nums.sort()
    
    def backtrack(start, path):
        res.append(path)
        for i in range(start, len(nums)):
            # Skip duplicates
            if i > start and nums[i] == nums[i-1]:
                continue
            # Include nums[i] and move to the next element
            backtrack(i + 1, path + [nums[i]])
            
    backtrack(0, [])
    return res