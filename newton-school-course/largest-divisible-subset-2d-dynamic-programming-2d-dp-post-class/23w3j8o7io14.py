def largestDivisibleSubset(nums):
    if not nums:
        return []

    nums.sort()
    n = len(nums)

    # dp[i] = length of the largest divisible subset ending at index i
    dp = [1] * n
    # prev[i] = previous index in the subset chain ending at i
    prev = [-1] * n

    max_len = 1
    best_idx = 0

    for i in range(1, n):
        for j in range(i):
            if nums[i] % nums[j] == 0 and dp[j] + 1 > dp[i]:
                dp[i] = dp[j] + 1
                prev[i] = j
        if dp[i] > max_len:
            max_len = dp[i]
            best_idx = i

    # Reconstruct the subset from best_idx back through prev pointers
    result = []
    curr = best_idx
    while curr != -1:
        result.append(nums[curr])
        curr = prev[curr]

    result.reverse()
    return result