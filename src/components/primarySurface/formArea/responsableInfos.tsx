import errorIcon from "../../../assets/icons/alert-circle.svg";
import { useState } from "react";
export function ResponsableInfos() {
  const [value, setValue] = useState("");
  const [modified, setModified] = useState(false);

  function validemail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const mostrarErro = modified && value.length > 0 && !validemail(value);
  return (
    <section className="w-full flex flex-col gap-[4rem]">
      <div className="flex flex-col ">
        <h3 className="text-color-primary">Responsible Information</h3>
      </div>
      <fieldset className="flex flex-col gap-[16px] ">
        <div className="input-wrapper">
          <label htmlFor="street" className="text-text-tertiary">
            Responsible Name
          </label>
          <input
            className="border border-stroke-default rounded px-3 py-2 placeholder:text-text-tertiary focus:outline-[#F67841]"
            type="text"
            id="responsibleName"
            name="responsibleName"
            placeholder="Please enter the responsible name"
            required
          />
          <label htmlFor="street" className="text-text-tertiary text-sm mt-1">
            Principal responsible legal and emergency contact
          </label>
        </div>

        <div className="input-wrapper">
          <label htmlFor="street" className="text-text-tertiary">
            Phone
          </label>
          <input
            className="border border-stroke-default rounded px-3 py-2 placeholder:text-text-tertiary focus:outline-[#F67841]"
            type="text"
            id="phone"
            name="phone"
            placeholder="(10) 9 8765-4321"
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="street">E-mail</label>
          <input
            className={`border rounded px-3 py-2 placeholder:text-text-tertiary
    ${
    mostrarErro
      ? "border-semantic-error focus:outline-semantic-error"
      : "border-stroke-default focus:outline-[#F67841]"
  }
`}
            type="email"
            id="email"
            name="email"
            placeholder="john.doe123@email.com"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setModified(true);
            }}
          />
          {mostrarErro && (
            <div className="error flex gap-4 items-start">
              <img src={errorIcon} alt="Error" className="error-icon" />
              <span className="error-message text-semantic-error">
                Please enter a valid email address.
              </span>
            </div>
          )}
        </div>
      </fieldset>
    </section>
  );
}
