import arrowLeft from "../../assets/icons/arrow-left-02.svg";

export function Header() {
  return (
    <header className="surface-primary p-4 gap-[16px] flex flex-col justify-start">
      <div className="flex gap-[8px] hidden md:block">
        <img src={arrowLeft} alt="Arrow left" />
        <p className=" text-color-tertiary">Back</p>
      </div>
      <div className="flex flex-col gap-[8px]">
        <h2 className="flex justify-start">Enrollment Form</h2>
        <p className="text-color-tertiary">
          Fill in the information below to enroll your child at Estrelas do
          Amanhã Kindergarten.
        </p>
      </div>
    </header>
  );
}
