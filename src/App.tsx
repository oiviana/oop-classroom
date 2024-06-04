import Blackboard from "./components/Blackboard";
import Professor from "./components/Professor";
import Student from "./components/Student";
import { FaInfoCircle } from "react-icons/fa";

function App() {
  return (
    <div className=" w-full max-w-[1210px] mx-auto p-2">
      <Blackboard />
      <div className="flex flex-col md:flex-row md:justify-between my-4">
        <div className="mt-6">
          <button>
            <FaInfoCircle size={35} className="text-sky-950" />
          </button>
        </div>
        <Professor />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 ">
        <Student />
     
  
      </div>
    </div>
  );
}

export default App;
