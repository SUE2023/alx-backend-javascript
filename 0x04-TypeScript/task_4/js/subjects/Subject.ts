/// <reference path="TeacherInterface.ts" />

namespace Subjects {
    export class Subject {
        private teacher: TeacherInterface;

        setTeacher(teacher: TeacherInterface): void {
            this.teacher = teacher;
        }
    }
}
