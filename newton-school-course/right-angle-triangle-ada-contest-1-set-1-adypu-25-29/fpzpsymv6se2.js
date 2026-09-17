# Read input N
n = int(input())

# Loop through each row from 1 to N
for i in range(1, n + 1):
    # Print i asterisks separated by a space
    print(" ".join(["*"] * i))