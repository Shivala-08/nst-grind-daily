def lengthOfLIS(nums):
    if not nums:
        return 0
    
    tails = []
    for num in nums:
        left, right = 0, len(tails) - 1
        idx = len(tails)
        
        while left <= right:
            mid = (left + right) // 2
            if tails[mid] >= num:
                idx = mid
                right = mid - 1
            else:
                left = mid + 1
                
        
        if idx == len(tails):
            tails.append(num)
        else:
            tails[idx] = num
            
    return len(tails)