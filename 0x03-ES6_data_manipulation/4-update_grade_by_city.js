export function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  const studentsInCity = students.filter(student => student.location === city);

  // Update grades
  return studentsInCity.map(student => {
    // Find the new grade for the student
    const gradeObj = newGrades.find(grade => grade.studentId === student.id);
    
    // Return the student object with the new grade or 'N/A' if not found
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A'
    };
  });
}
