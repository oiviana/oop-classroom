import ModalSteps from "./ModalSteps";

export default function InitialModal() {
  return (
    <div className="w-full mx-auto absolute h-36 bg-white shadow rounded-md top-1 flex flex-col md:flex-row p-4 justify-between md:h-[40rem]">
      <ModalSteps />
      <div>content</div>
    </div>
  );
}
