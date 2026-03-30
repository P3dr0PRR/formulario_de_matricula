import errorIcon from "../../../assets/icons/alert-circle.svg";
import { useState } from "react";
export function ResponsableInfos() {
  const [valor, setValor] = useState("");
  const [modified, setModified] = useState(false);

  function emailValido(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const mostrarErro = modified && valor.length > 0 && !emailValido(valor);
  return (
    <section className="w-full flex flex-col gap-[4rem]">
      <div className="flex flex-col ">
        <h3 className="text-color-primary">Informações do Responsável</h3>
      </div>
      <fieldset className="flex flex-col gap-[16px] ">
        <div className="input-wrapper">
          <label htmlFor="street" className="text-text-tertiary">
            Nome do responsável
          </label>
          <input
            className="border border-stroke-default rounded px-3 py-2 placeholder:text-text-tertiary focus:outline-[#F67841]"
            type="text"
            id="cep"
            name="cep"
            placeholder="Digite o nome do responsável"
            required
          />
          <label htmlFor="street" className="text-text-tertiary text-sm mt-1">
            Principal responsável legal e contato de emergência
          </label>
        </div>

        <div className="input-wrapper">
          <label htmlFor="street">Telefone</label>
          <input
            className="border border-stroke-default rounded px-3 py-2 placeholder:text-text-tertiary focus:outline-[#F67841]"
            type="text"
            id="cep"
            name="cep"
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
            placeholder="papailegal123@email.com"
            value={valor}
            onChange={(e) => {
              setValor(e.target.value);
              setModified(true);
            }}
          />
          {mostrarErro && (
            <div className="error flex gap-4 items-start">
              <img src={errorIcon} alt="Error" className="error-icon" />
              <span className="error-message text-semantic-error">
                Insira um E-mail inválido
              </span>
            </div>
          )}
        </div>
      </fieldset>
    </section>
  );
}
