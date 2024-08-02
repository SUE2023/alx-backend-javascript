/// <reference path="TeacherInterface.ts" />
/// <reference path="Subject.ts" />
/// <reference path="Cpp.ts" />

export const cppTeacher: Subjects.TeacherInterface = {
    firstName: "Noela",
    lastName: "Konjalo",
    experienceTeachingC: 10
};

const cppSubject = new Subjects.Cpp();
cppSubject.setTeacher(cppTeacher);

console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

export const JavaTeacher: Subjects.TeacherInterface = {
    firstName: "Mark",
    lastName: "John",
    experienceTeachingJava: 15
};

const JavaSubject = new Subjects.Java();
javaSubject.setTeacher(JavaTeacher);

console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

export const ReactTeacher: Subjects.TeacherInterface = {
    firstName: "Nelson",
    lastName: "Okore",
    experienceTeachingREact: 5
};

const ReactSubject = new Subjects.React();
reactSubject.setTeacher(ReactTeacher);

console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher()); 

