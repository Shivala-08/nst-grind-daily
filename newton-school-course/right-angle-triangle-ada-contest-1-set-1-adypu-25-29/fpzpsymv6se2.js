def print_triangle(n, current=1):
    if current > n:
        return
    
    # Helper function to generate a row of 'current' asterisks separated by spaces without using '*'
    def make_row(count):
        if count == 1:
            return "*"
        return "* " + make_row(count - 1)
    
    print(make_row(current))
    print_triangle(n, current + 1)

# Read input N
n = int(input())
print_triangle(n)