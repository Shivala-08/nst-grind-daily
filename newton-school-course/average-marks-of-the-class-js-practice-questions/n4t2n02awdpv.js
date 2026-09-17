function filterStudents(students) {
    let users = [];
    
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let sum = 0;
        
        for (let j = 0; j < student.marks.length; j++) {
            sum += student.marks[j];
        }
        
        let average = sum / student.marks.length;
        
        if (average >= 35) {
            users.push(student.name);
        }
    }
    
    return users;
}