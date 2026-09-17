def first_repeated(arr):
    # Dictionary to store the frequency of each element
    freq = {}
    for num in arr:
        freq[num] = freq.get(num, 0) + 1
        
    # Find the first element with a frequency greater than 1
    for i in range(len(arr)):
        if freq[arr[i]] > 1:
            return i + 1  # 1-based indexing
            
    return -1