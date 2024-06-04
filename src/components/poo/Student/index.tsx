import StudentIcon from "./StudentIcon";

export default function Student() {
  return (
    <div className="font-roboto flex flex-col items-center text-xl max-w-[180px]">
      <StudentIcon />
      <h2>
       Nome do aluno
      </h2>
    </div>
  );
}
