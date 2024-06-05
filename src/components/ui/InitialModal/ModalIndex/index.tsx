import { steps } from "./steps";

export default function ModalIndex({ currentStep }: { currentStep: number }) {
  return (
    <div className="w-full md:max-w-[22rem] text-lg md:text-xl font-semibold">
      <div className="flex md:hidden border-b-[1px] border-slate-300 py-4">
        <div className="flex gap-3 items-center">
          <span className="border-[1px] bg-slate-700 text-white rounded-full w-8 flex justify-center items-center ">
            {steps[currentStep - 1].number}
          </span>
          <p>{steps[currentStep - 1].name}</p>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center justify-center h-full gap-[6rem] border-[1px] border-slate-300 rounded-sm">
        {steps.map((step) => {
          return (
            <div className="flex gap-3 items-center text-slate-700 font-semibold ">
              <span
                className={`border-[1px] border-slate-700 rounded-full w-8 flex justify-center items-center transition-colors ${
                  currentStep === step.number && "bg-slate-700 text-white"
                } `}
              >
                {step.number}
              </span>
              <p>{step.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
