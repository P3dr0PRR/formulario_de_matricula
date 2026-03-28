import { Header } from "./header";
import { KidInfos } from "./formArea/kidInfos";
export function Form() {
  return (
    <section className="w-full flex flex-col gap-4 p-6 md:p-[4rem] scroll-auto">
      <Header />
      <KidInfos />
    </section>
  );
}
