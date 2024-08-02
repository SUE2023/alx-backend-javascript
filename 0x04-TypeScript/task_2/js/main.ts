interface TeacherInterface {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;  // This allows adding any additional attributes to the object

    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

interface DirectorInterface extends TeacherInterface {
    numberOfReports: number;

    workDirectorTasks(): string;
}

class Teacher implements TeacherInterface {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.yearsOfExperience = yearsOfExperience;
        this.location = location;
    }

    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

class Director implements DirectorInterface {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    numberOfReports: number;
    [key: string]: any;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, numberOfReports: number, yearsOfExperience?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.yearsOfExperience = yearsOfExperience;
        this.location = location;
        this.numberOfReports = numberOfReports;
    }

    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher("Felix", "Kiptoo", true, "Kericho", 5);
    } else {
        return new Director("Sophie", "Swaga", true, "Nairobi", 10, 20);
    }
}

function isDirector(employee:Director)

function executeWork(employee){
    if Director
	workDirectorTasks()
    }else{
        workTeacherTasks()
	}	
}
