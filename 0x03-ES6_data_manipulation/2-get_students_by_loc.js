export default function getStudentsByLocation(students, city) {
  return students.filter(function (student) {
    return student.location === city;
  });
}
