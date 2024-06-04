export interface SubjectProps {
  subjectName: string;
  hours: number;
}

class Subject {
  subjectName: string;
  hours: number;

  constructor({ subjectName, hours }: SubjectProps) {
    this.subjectName = subjectName;
    this.hours = hours;
  }
}

export default Subject;
