import { Header } from "./header";
import { KidInfos } from "./formArea/kidInfos";
import { ResidencialAdress } from "./formArea/residencialAdress";
import { ResponsableInfos } from "./formArea/responsableInfos";
import { RegistrationOptions } from "./formArea/registrationOptions";
export function Form() {
  return (
    <section className="w-full flex flex-col gap-[32px] p-6 md:p-[4rem] scroll-auto">
      <Header />
      <form className="flex flex-col gap-[32px]">
        <KidInfos />
        <ResidencialAdress />
        <ResponsableInfos />
        <RegistrationOptions />
      </form>
    </section>
  );
}
