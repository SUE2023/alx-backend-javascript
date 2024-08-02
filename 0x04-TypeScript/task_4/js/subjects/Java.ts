/// <reference path="TeacherInterface.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
    export class Java extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingJava &&
                this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
