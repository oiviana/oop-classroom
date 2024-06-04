import Student from './Student';
import Professor from './Professor';

interface ClassroomProps {
  totalHours: number;
  students: Student[];
  professors: Professor[];
}

class Classroom {
    totalHours: number;
    students: Student[];
    professors: Professor[];
  
    constructor({ totalHours, students, professors }: ClassroomProps) {
      this.totalHours = totalHours;
      this.students = students;
      this.professors = professors;
    }
  
    addStudent(student: Student) {
      this.students.push(student);
    }
  }
  export default Classroom;
  