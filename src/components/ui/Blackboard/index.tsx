export default function Blackboard(){

    return(
        <div className="w-full h-[25rem] bg-green-900 box-border border-[16px] border-yellow-950 font-chalk text-white flex flex-col items-center gap-16 uppercase">
            <h1 className="text-lg md:text-xl lg:text-4xl mt-2">Object Oriented Classroom</h1>
            <div className="flex justify-between w-full max-w-[700px]  text-base lg:text-xl ">
                <div className="flex flex-col items-center">
                    <h2>Alunos</h2>
                    <p className="lg:text-4xl"> 5</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2>matérias</h2>
                    <p className="lg:text-4xl"> 5</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2>Duração</h2>
                    <p className="lg:text-4xl"> 5</p>
                </div>
            </div>
        </div>
    )
}