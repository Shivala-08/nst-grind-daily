def print_permutation(n):
    def backtrack(start, path, used, result):
        if len(path) == n:
            result.append(list(path))
            return
        
        for i in range(1, n + 1):
            if not used[i]:
                used[i] = True
                path.append(i)
                backtrack(start, path, used, result)
                path.pop()
                used[i] = False

    result = []
    used = [False] * (n + 1)
    backtrack(1, [], used, result)
    return result