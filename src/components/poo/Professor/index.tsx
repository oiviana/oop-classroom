import ProfessorIcon from "./ProfessorIcon";

export default function Professor(){

    //Professor inicia uma aula
    //Professor encerra uma aula

    return(
        <div className="font-roboto flex flex-col text-xl items-center md:items-end">
        <ProfessorIcon/>
        <h2><b>Professor(a):</b> Rodinei</h2>
        </div>
    )
}