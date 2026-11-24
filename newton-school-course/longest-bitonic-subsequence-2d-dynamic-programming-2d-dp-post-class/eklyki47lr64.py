def lbs(nums):
    n = len(nums)
    if n < 3:
        return 0

    # inc[i]: length of longest strictly increasing subsequence ending at index i
    inc = [1] * n
    for i in range(n):
        for j in range(i):
            if nums[j] < nums[i] and inc[j] + 1 > inc[i]:
                inc[i] = inc[j] + 1

    # dec[i]: length of longest strictly decreasing subsequence starting at index i
    dec = [1] * n
    for i in range(n - 1, -1, -1):
        for j in range(n - 1, i, -1):
            if nums[j] < nums[i] and dec[j] + 1 > dec[i]:
                dec[i] = dec[j] + 1

    # A valid bitonic sequence must strictly increase AND strictly decrease,
    # so both inc[i] > 1 and dec[i] > 1 must hold at peak index i.
    ans = 0
    for i in range(n):
        if inc[i] > 1 and dec[i] > 1:
            ans = max(ans, inc[i] + dec[i] - 1)

    return ans