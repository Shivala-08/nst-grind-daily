import sys


def solve():
  input_data = sys.stdin.read().split()
  if not input_data:
    return
  n = int(input_data[0])

  chars = 'aeiou1234@'
  vowels = set('aeiou')
  digits = set('1234')

  # Precompute valid types for quick checks
  # 0: vowel, 1: digit, 2: '@'

  def get_type(c):
    if c in vowels:
      return 0
    if c in digits:
      return 1
    return 2

  results = []

  def backtrack(idx, path):
    if idx == n:
      # Check conditions
      # 1. No two consecutive characters are the same (handled during generation)
      # 2. At most two numeric characters
      num_digits = sum(1 for c in path if c in digits)
      if num_digits > 2:
        return
      # 3. '@' cannot appear in the first or last position
      if n > 0 and (path[0] == '@' or path[-1] == '@'):
        return
      # 4. '@' cannot appear more than once
      if path.count('@') > 1:
        return
      # 5. No two numeric characters are adjacent (handled during generation)
      # 6. Must contain at least one vowel
      if not any(c in vowels for c in path):
        return

      results.append(''.join(path))
      return

    for c in chars:
      # Condition 3 optimization for first position
      if idx == 0 and c == '@':
        continue
      # Condition 1: No two consecutive characters are the same
      if idx > 0 and path[-1] == c:
        continue
      # Condition 5: No two numeric characters are adjacent
      if idx > 0 and c in digits and path[-1] in digits:
        continue
      # Condition 4: '@' cannot appear more than once
      if c == '@' and '@' in path:
        continue

      path.append(c)
      backtrack(idx + 1, path)
      path.pop()

  backtrack(0, [])

  for res in results:
    print(res)


if __name__ == '__main__':
  solve()