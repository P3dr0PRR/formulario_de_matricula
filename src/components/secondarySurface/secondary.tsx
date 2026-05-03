import logo from "../../assets/logo.svg";
import img from "../../assets/Illustration.svg";
export function Secondary() {
  return (
    <section className="md:min-h-screen w-full bg-surface-secondary px-[4rem] py-[2rem] ">
      <div>
        <div className="flex flex-col">
          <div className="flex justify-start">
            <img src={logo} alt="Logo" />
          </div>
          <p className="text-[2rem] lg:text-[3.25rem] font-semibold">
            Because every moment of{" "}
            <span className="text-text-highlight">learning</span> counts
          </p>
          <p className="text-[1rem]">
            Enroll your child in our school and watch them bloom in a welcoming, safe, and stimulating environment.
          </p>

          <div id="img" className="flex items-center justify-center">
            <img src={img} alt="Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}
