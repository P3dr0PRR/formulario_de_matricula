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
            Porque cada momento de{" "}
            <span className="text-text-highlight">aprendizado</span> conta
          </p>
          <p className="text-[1rem]">
            Inscreva seu filho em nossa escola e veja-o florescer em um ambiente
            acolhedor, seguro e estimulante.
          </p>

          <div id="img" className="flex items-center justify-center">
            <img src={img} alt="Imagem" />
          </div>
        </div>
      </div>
    </section>
  );
}
