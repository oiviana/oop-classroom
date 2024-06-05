import { useState } from "react";
import ModalIndex from "./ModalIndex";
import FirsStep from "./Steps/FirstStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function InitialModal() {
  const componentSteps = [FirsStep, SecondStep, ThirdStep];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const CurrentComponent = componentSteps[currentStep - 1];

  const handleNextStep = () => {
    if (currentStep === componentSteps.length) return;
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep === 1) return;
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-full mx-auto absolute h-full bg-white shadow rounded-md top-1 flex flex-col md:flex-row p-5 justify-between md:gap-14 md:h-[40rem]">
      <ModalIndex currentStep={currentStep} />
      <div className="flex flex-col flex-1">
        <CurrentComponent />
        <footer className="mt-auto border-t-[1px] border-slate-200 pt-3 w-full flex justify-end gap-2 ">
          {currentStep > 1 && (
            <button
              className="py-1 px-4 rounded transition-all"
              onClick={handlePreviousStep}
            >
              <IoMdArrowRoundBack size={30} className="text-slate-800" />
            </button>
          )}
          <button
            className="bg-slate-700 text-white font-semibold py-2 px-4 rounded"
            onClick={handleNextStep}
          >
            Próximo
          </button>
        </footer>
      </div>
    </div>
  );
}
