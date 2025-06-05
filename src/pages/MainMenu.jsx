import { PlayButton } from "../components/PlayButton";
import { Logo } from "../components/Logo";

export function MainMenu() {
  return (
    <div className="bg-[url(/background-desktop.svg)] bg-center bg-cover bg-no-repeat min-h-screen flex justify-center items-center pt-45 pb-30">
      <div className="relative bg-[linear-gradient(to_bottom,_#344aba,_#001479)] shadow-[inset_0_-8px_0_4px_#140E66,inset_0_6px_0_8px_#2463ff] w-full h-[30.1rem] md:w-[37rem] md:h-[31.25rem] flex justify-center items-center flex-col rounded-[3rem] md:rounded-[4.5rem] mx-[1.6rem] gap-y-12">
        <Logo />
        <div className="flex justify-center items-center flex-col mt-20 gap-y-15">
          <Play />
          <PlayButton />
        </div>
      </div>
    </div>
  );
}

function Play() {
  return (
    <button className="shadow-[inset_0_-4px_0_5px_#243041,inset_0_-12px_0_11px_#9d2df5] w-[10rem] h-[10rem] md:w-[12.5rem] md:h-[12.5rem] flex justify-center items-center bg-[linear-gradient(to_bottom,_#fe71fe,_#7199ff)] rounded-full cursor-pointer">
      <img src="/icon-play.svg" alt="play" />
    </button>
  );
}
