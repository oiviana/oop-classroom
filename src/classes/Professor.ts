import Subject, { SubjectProps } from "./Subject.ts";

interface ProfessorProps extends SubjectProps {
  professorName: string;
}

class Professor extends Subject {
  professorName: string;

  constructor({ professorName, subjectName, hours }: ProfessorProps) {
    super({ subjectName, hours }); 
    this.professorName = professorName;
  }
}

export default Professor;