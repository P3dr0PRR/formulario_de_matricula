import arrowLeft from "../../assets/icons/arrow-left-02.svg";

export function Header() {
  return (
    <header className="surface-primary p-4 gap-[16px] flex flex-col justify-start">
      <div className="flex gap-[8px]">
        <img src={arrowLeft} alt="Seta para esquerda" />
        <p className="text-color-tertiary">Voltar</p>
      </div>
      <div className="flex flex-col gap-[8px]">
        <h2 className="flex justify-start">Formulário de Matrícula</h2>
        <p className="text-color-tertiary">
          Preencha os dados abaixo para matricular seu filho na escola de
          educação infantil Estrelas do Amanhã.
        </p>
      </div>
    </header>
  );
}
