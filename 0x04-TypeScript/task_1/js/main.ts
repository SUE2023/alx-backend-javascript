// Teacher and Directors interfaces
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;  // This allows adding any additional attributes to the object
}

interface Directors extends Teacher {
    numberOfReports: number;
}
// Creating a new teacher object with additional attributes
const teacher1: Teacher = {
    firstName: "Situma",
    lastName: "Khaluale",
    fullTimeEmployee: true,
    location: "Kakamega",
    contract: false,  // Example of an additional attribute
};
// printTeacher function and interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
// StudentClass and its interfaces
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
