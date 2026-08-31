import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    
    n = int(input_data[0])
    chars = ['a', 'e', 'i', 'o', 'u', '1', '2', '3', '4', '@']
    digits = {'1', '2', '3', '4'}

    def backtrack(curr, digit_count):
        if len(curr) == n:
            print("".join(curr))
            return
        
        for ch in chars:
            # Condition 1: No two consecutive characters are the same
            if curr and curr[-1] == ch:
                continue
            
            # Condition 2: At most two numeric characters
            is_digit = ch in digits
            if is_digit and digit_count == 2:
                continue
            
            curr.append(ch)
            backtrack(curr, digit_count + (1 if is_digit else 0))
            curr.pop()

    backtrack([], 0)

if __name__ == '__main__':
    solve()