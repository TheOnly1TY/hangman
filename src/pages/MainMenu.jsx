import { GuideButton } from "../components/GuideButton";
import { Logo } from "../components/Logo";
import { PlayButton } from "../components/PlayButton";

export function MainMenu() {
  return (
    <div className="bg-[url(/background-desktop.svg)] bg-center bg-cover bg-no-repeat min-h-screen flex justify-center items-center pt-45 pb-30">
      <div className="relative bg-[linear-gradient(to_bottom,_#344aba,_#001479D4)] shadow-[inset_0_-8px_0_4px_#140E66,inset_0_6px_0_8px_#2463ff] w-full h-[30.1rem] md:w-[37rem] md:h-[31.25rem] flex justify-center items-center flex-col rounded-[3rem] md:rounded-[4.5rem] mx-[1.6rem] gap-y-12">
        <Logo />
        <div className="flex justify-center items-center flex-col mt-20 gap-y-15">
          <PlayButton />
          <GuideButton />
        </div>
      </div>
    </div>
  );
}
