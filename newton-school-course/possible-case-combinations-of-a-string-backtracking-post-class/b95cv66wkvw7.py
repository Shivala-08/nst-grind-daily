def generate_permutations(s):
    result = [""]
    for char in s:
        if char.isalpha():
            result = [
                prefix + c
                for prefix in result
                for c in (char.lower(), char.upper())
            ]
        else:
            result = [prefix + char for prefix in result]
    return result