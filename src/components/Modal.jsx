import { useNavigate } from "react-router-dom";
import { GuideButton } from "./GuideButton";

export function Modal({ children }) {
  const navigate = useNavigate();
  const handleCloseModal = () => {};
  const handleCategory = () => {
    navigate(-1);
  };
  const handleQuit = () => {
    navigate("/");
  };
  return (
    <>
      <div className="z-10 modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative bg-[linear-gradient(to_bottom,_#344aba,_#001479D4)] shadow-[inset_0_-8px_0_4px_#140E66,inset_0_6px_0_8px_#2463ff] w-full h-[30.1rem] md:w-[37rem] md:h-[31.25rem] flex justify-center items-center md:mx-auto flex-col rounded-[3rem] md:rounded-[4.5rem] mx-[1.6rem] gap-y-12">
          <figure className="absolute -top-8.4 md:-top-15 w-[250.54px] md:w-[373.69px] lg:w-auto">
            {children}
          </figure>
          <div className="flex flex-col justify-center items-center gap-y-[34px] mt-10">
            <GuideButton
              text="Continue"
              styles="w-[226px]"
              onAction={handleCloseModal}
            />
            <GuideButton
              text="New Category"
              styles="w-[275px]"
              onAction={handleCategory}
            />
            <GuideButton
              text="Quit Game"
              styles="w-[235px] bg-[linear-gradient(to_bottom,_#FE71FE,_#7199FF)] shadow-[inset_0_-2px_0_3px_#140E66,inset_0_1px_0_6px_#C642FB]"
              onAction={handleQuit}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0 opacity-80 " />
    </>
  );
}
