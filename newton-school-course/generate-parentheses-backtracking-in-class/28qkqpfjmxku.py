def generateParenthesis(n):
    result = []
    
    def backtrack(current_str, open_count, close_count):
        if len(current_str) == 2 * n:
            result.append(current_str)
            return
        if open_count < n:
            backtrack(current_str + "(", open_count + 1, close_count)
            
        # Choice 2: Add a closing bracket if it balances an opening bracket
        if close_count < open_count:
            backtrack(current_str + ")", open_count, close_count + 1)
            
    backtrack("", 0, 0)
    return result