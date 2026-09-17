def sort_students(students):
    # Base case: A list of zero or one elements is already sorted
    if len(students) <= 1:
        return students
    
    # Choose a pivot (we use the middle element here)
    pivot = students[len(students) // 2]
    pivot_name, pivot_marks = pivot[0], pivot[1]
    
    left = []
    middle = []
    right = []
    
    for student in students:
        name, marks = student[0], int(student[1])
        
        # Condition 1: marks are less than pivot marks
        # Condition 2: marks are equal, but name comes first alphabetically
        if marks < pivot_marks or (marks == pivot_marks and name < pivot_name):
            left.append(student)
            
        # Condition 1: marks are greater than pivot marks
        # Condition 2: marks are equal, but name comes later alphabetically
        elif marks > pivot_marks or (marks == pivot_marks and name > pivot_name):
            right.append(student)
            
        # Exactly equal to the pivot
        else:
            middle.append(student)
            
    # Recursively apply quicksort and combine
    return sort_students(left) + middle + sort_students(right)