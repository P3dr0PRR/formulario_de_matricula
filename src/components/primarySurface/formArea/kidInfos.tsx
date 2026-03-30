// import CloudUpload from "../../../assets/icons/cloud-upload.svg?react";
export function KidInfos() {
  return (
    <section className="w-full flex flex-col gap-[4rem]">
      <div className="flex flex-col ">
        <h3 className="text-color-primary">Informações da Criança</h3>
      </div>

      <fieldset className="flex flex-col gap-[16px] ">
        <legend className="font-semibold text-[16px] mb-[16px] text-text-secondary">
          Informações da criança
        </legend>

        <div className="input-wrapper">
          <label htmlFor="FullName" className="text-text-tertiary">
            Nome completo
          </label>
          <input
            className="border border-stroke-default rounded px-3 py-2 placeholder:text-text-tertiary focus:outline-[#F67841]"
            type="text"
            id="FullName"
            name="FullName"
            placeholder="Digite o nome completo da criança"
            required
          />
        </div>

        <div className="date-wrapper">
          <label htmlFor="birthDate" className="text-text-tertiary">
            Data de nascimento
          </label>
          <input
            className="border rounded px-3 py-2 focus:outline-[#F67841]"
            type="date"
            id="birthDate"
            name="birthDate"
            required
          />
        </div>

        <div className="select-wrapper">
          <label htmlFor="gender" className="text-text-tertiary">
            Sexo
          </label>
          <select
            id="gender"
            name="gender"
            className="appearance-none border border-stroke-default rounded px-3 py-2 focus:outline-[#F67841]"
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div className="input-wrapper">
          <label htmlFor="medicalInfo" className="text-text-tertiary">
            Informações médicas
          </label>
          <textarea
            className="border border-stroke-default rounded px-3 py-2 placeholder:text-text-tertiary focus:outline-[#F67841]"
            id="medicalInfo"
            name="medicalInfo"
            placeholder="Ex: Ela tem alergia a glúten"
            required
          />
        </div>

        <label htmlFor="birth-file" className="text-text-tertiary">
          Certidão de nascimento
        </label>

        <div className="droparea-wrapper">
          <input type="file" id="birth-file" name="birth-file" />
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.9552 18.0221C34.97 18.022 34.985 18.022 35 18.022C39.9706 18.022 44 22.0588 44 27.0386C44 31.6796 40.5 35.5016 36 36M34.9552 18.0221C34.9848 17.6921 35 17.3579 35 17.0202C35 10.9339 30.0752 6 24 6C18.2465 6 13.5247 10.4253 13.0408 16.0638M34.9552 18.0221C34.7506 20.2952 33.8572 22.3692 32.4856 24.033M13.0408 16.0638C7.96796 16.5475 4 20.8278 4 26.0366C4 30.8834 7.43552 34.9264 12 35.8546M13.0408 16.0638C13.3565 16.0337 13.6765 16.0183 14 16.0183C16.2516 16.0183 18.3295 16.7639 20.001 18.022"
              stroke="#D6D3D1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24 26V42M24 26C22.5996 26 19.9831 29.9886 19 31M24 26C25.4004 26 28.017 29.9886 29 31"
              stroke="#D6D3D1"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="text-[#A8A29E]">
            Clique aqui para selecionar os arquivos
          </p>
        </div>
      </fieldset>
    </section>
  );
}
