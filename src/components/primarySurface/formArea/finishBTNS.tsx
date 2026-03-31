export function FinishBTNS() {
  return (
    <section className=" flex justify-end border border-dashed border-stroke-default rounded p-3">
      <button
        type="button"
        className="border border-stroke-highlight text-text-highlight hover:shadow-[0_0_8px_#e43a12] px-4 py-2 rounded mr-2"
      >
        Salvar
      </button>
      <button
        type="submit"
        className="bg-[#e43a12] text-white hover:shadow-[0_0_8px_#e43a12] px-4 py-2 rounded"
      >
        Cancelar
      </button>
    </section>
  );
}
