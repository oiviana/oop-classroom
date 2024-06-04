interface StudentProps {
  name: string;
  age: number;
  studentId: number;
}

class Student {
  name: string;
  age: number;
  studentId: number;

  constructor({ name, age, studentId }: StudentProps) {
    this.age = age
    this.name = name
    this.studentId = studentId
  }
}

export default Student;
