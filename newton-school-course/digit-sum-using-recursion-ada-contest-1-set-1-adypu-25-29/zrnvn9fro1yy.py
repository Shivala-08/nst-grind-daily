def sum_of_digits(n):
    # Base case: if n is 0, the sum of digits is 0
    if n == 0:
        return 0
    # Recursive case: last digit (n % 10) + sum of remaining digits (n // 10)
    return (n % 10) + sum_of_digits(n // 10)