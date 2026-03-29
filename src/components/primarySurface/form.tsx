import { Header } from "./header";
import { KidInfos } from "./formArea/kidInfos";
import { ResidencialAdress } from "./formArea/residencialAdress";
export function Form() {
  return (
    <section className="w-full flex flex-col gap-4 p-6 md:p-[4rem] scroll-auto">
      <Header />
      <form className="flex flex-col gap-32">
        <KidInfos />
        <ResidencialAdress />
      </form>
    </section>
  );
}
