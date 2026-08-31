import itertools
import sys
def solve():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    
    n = int(input_data[0])
    chars = "aeiou1234@"
    for p in itertools.product(chars, repeat=n):
        print("".join(p))

if __name__ == '__main__':
    solve()