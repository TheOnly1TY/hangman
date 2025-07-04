import { useNavigate } from "react-router-dom";
import { ActionButton } from "./ActionButton";
import { resetGame } from "../pages/inGame/gameSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
export function Modal({ children, actionLabel, onAction }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategory = () => {
    navigate(-1);
    dispatch(resetGame());
  };

  const handleQuit = () => {
    navigate("/");
    dispatch(resetGame());
  };
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="fixed z-10 top-1/2 lg:top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  w-[calc(100%-3.2rem)] max-w-[37rem] h-[30.1rem] md:h-[31.25rem] rounded-[3rem] md:rounded-[4.5rem]
                  bg-[linear-gradient(to_bottom,_#344aba,_#001479D4)] shadow-[inset_0_-8px_0_4px_#140E66,inset_0_6px_0_8px_#2463ff]
                  flex flex-col justify-center items-center gap-y-12
                  md:mx-auto"
      >
        <figure className="absolute -top-10  md:-top-15">{children}</figure>
        <div className="flex flex-col justify-center items-center gap-y-[34px] mt-10">
          <ActionButton
            text={actionLabel}
            styles="w-[14.125rem]"
            onAction={onAction}
          />
          <ActionButton
            text="New Category"
            styles="w-[17.2rem]"
            onAction={handleCategory}
          />
          <ActionButton
            text="Quit Game"
            styles="w-[14.7rem] bg-[linear-gradient(to_bottom,_#FE71FE,_#7199FF)] shadow-[inset_0_-2px_0_3px_#140E66,inset_0_1px_0_6px_#C642FB]"
            onAction={handleQuit}
          />
        </div>
      </motion.div>

      <div className="fixed top-0 right-0 left-0 bottom-0 bg-[linear-gradient(to_bottom,rgba(26,4,58,0.7),rgba(21,18,120,0.7),rgba(43,22,119,0.7))] z-0" />
    </>
  );
}
