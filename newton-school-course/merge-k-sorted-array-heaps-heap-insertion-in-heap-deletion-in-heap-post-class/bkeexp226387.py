def merge_k_sorted_arrays(arrays):
    result = []
    for row in arrays:
        result.extend(row)
    result.sort()
    return result