export function ResidencialAdress() {
  return (
    <section className="w-full flex flex-col gap-[4rem]">
      <div className="flex flex-col ">
        <h3 className="text-color-primary">Endereço residencial</h3>
      </div>
      <fieldset className="flex flex-col gap-[16px] ">
        <div className="input-wrapper">
          <label htmlFor="street">CEP</label>
          <input
            className="border border-stroke-default rounded px-3 py-2 placeholder:text-text-tertiary focus:outline-[#F67841]"
            type="text"
            id="cep"
            name="cep"
            placeholder="Digite o CEP"
            required
          />
        </div>

        <div className="input-wrapper grid grid-cols-2">
          <div className="flex flex-col gap-4 ">
            <label htmlFor="street">Rua</label>
            <input
              className="border border-stroke-default rounded px-3 py-2 placeholder:text-text-tertiary focus:outline-[#F67841]"
              type="text"
              id="street"
              name="street"
              placeholder="Rua das Flores"
              required
            />
          </div>
          <div className="flex flex-col gap-4 w-[176px]  justify-self-end">
            <label htmlFor="street">Número</label>
            <input
              className="border border-stroke-default rounded px-3 py-2 placeholder:text-text-tertiary focus:outline-[#F67841]"
              type="text"
              id="number"
              name="number"
              placeholder="123"
              required
            />
          </div>
        </div>
        <div className="input-wrapper  grid grid-cols-2">
          <div className="flex flex-col gap-4 ">
            <label htmlFor="street">Cidade</label>
            <input
              className="border border-stroke-default rounded px-3 py-2 placeholder:text-text-tertiary focus:outline-[#F67841]"
              type="text"
              id="city"
              name="city"
              placeholder="São Paulo"
              required
            />
          </div>
          <div className="flex flex-col gap-4 w-[176px] justify-self-end">
            <label htmlFor="street">Estado</label>
            <input
              className="border border-stroke-default rounded px-3 py-2 placeholder:text-text-tertiary focus:outline-[#F67841]"
              type="text"
              id="state"
              name="state"
              placeholder="SP"
              required
            />
          </div>
        </div>
      </fieldset>
    </section>
  );
}
