import manha from "../../../assets/icons/sun-cloud-02.svg";
import tarde from "../../../assets/icons/sun-02.svg";

export function RegistrationOptions() {
  return (
    <section className="w-full flex flex-col gap-[4rem]">
      <div className="flex flex-col ">
        <h3 className="text-color-primary">Opções de matrícula</h3>
      </div>
      <fieldset className="flex flex-col gap-[16px] ">
        <label className="text-text-tertiary">
          Selecione o turno de estudo
        </label>
        <div className="radio-wrapper">
          <div className="radio-inner">
            <div className="radio-image"></div>
            <input type="radio" id="manha" name="study-shift" value="manha" />
            <img src={manha} alt="Manhã" />
            <label htmlFor="manha">Manhã</label>
          </div>

          <div className="radio-inner">
            <div className="radio-image"></div>
            <input type="radio" id="tarde" name="study-shift" value="tarde" />
            <img src={tarde} alt="Tarde" />
            <label htmlFor="tarde">Tarde</label>
          </div>
        </div>
      </fieldset>
    </section>
  );
}
