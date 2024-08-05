
export default class HolbertonCourse {
  constructor(name, length, students) {
    // Verify types and assign values
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for name
  getName() {
    return this._name;
  }

  // Setter for name
  setName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  // Getter for length
  getLength() {
    return this._length;
  }

  // Setter for length
  setLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = length;
  }

  // Getter for students
  getStudents() {
    return this._students;
  }

  // Setter for students
  setStudents(students) {
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    this._students = students;
  }
}
