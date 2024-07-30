// Function to get the sum of student IDs
export default function getStudentIdsSum(students) {
    // Extract student IDs from the list of students
    let arr = students.map(student => student.id);
    
    // Use reduce to sum the IDs
    return arr.reduce((sum, num) => sum + num, 0);
}

