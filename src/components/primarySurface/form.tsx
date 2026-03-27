import { Header } from "./header";
import { KidInfos } from "./formArea/kidInfos";
export function Form() {
  return (
    <section className="w-full flex flex-col gap-4 p-[4rem]">
      <Header />
      <KidInfos />
    </section>
  );
}
