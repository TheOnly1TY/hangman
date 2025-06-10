import { useNavigate } from "react-router-dom";
import { ActionButton } from "../components/ActionButton";
import { Logo } from "../components/Logo";
import { PlayButton } from "../components/PlayButton";
import { motion, scale } from "framer-motion";

export function MainMenu() {
  const navigate = useNavigate();
  const handleNavigateSteps = () => {
    navigate("/guide");
  };
  return (
    <div className="bg-[url(/background-mobile.svg)] md:bg-[url(/background-tablet.svg)] lg:bg-[url(/background-desktop.svg)] bg-center bg-cover bg-no-repeat min-h-screen flex justify-center items-center pt-45 pb-30">
      <motion.div className="relative bg-[linear-gradient(to_bottom,_#344aba,_#001479D4)] shadow-[inset_0_-8px_0_4px_#140E66,inset_0_6px_0_8px_#2463ff] w-full h-[30.1rem] md:w-[37rem] md:h-[31.25rem]  flex justify-center items-center flex-col rounded-[3rem] md:rounded-[4.5rem] mx-[1.6rem] gap-y-12">
        <Logo />
        <div className="flex justify-center items-center flex-col mt-20 gap-y-15">
          <PlayButton />
          <ActionButton
            text="How To Play"
            styles="w-[14.125rem]"
            animate={{ opacity: 1, scale: 1 }}
            onAction={handleNavigateSteps}
          />
        </div>
      </motion.div>
    </div>
  );
}
