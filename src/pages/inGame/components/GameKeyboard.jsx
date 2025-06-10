import { useDispatch, useSelector } from "react-redux";
import { handleGuesses } from "../gameSlice";
import { Alphabets } from "../../../utils/helpers";
import { motion } from "framer-motion";

export function GameKeyboard({ allLettersGuessed, healthUsedUp }) {
  const dispatch = useDispatch();
  const guessedLetters = useSelector((state) => state.game.guessedLetters);

  const handleLetterClicked = (letter) => {
    const audio = new Audio("/minimal-pop-click-ui-3-198303.mp3");
    audio.play();
    dispatch(handleGuesses(letter));
  };
  return (
    <div className="grid grid-cols-9 lg:gap-6 md:gap-x-4 gap-x-2 gap-y-6 py-20 lg:py-30">
      {Alphabets.map((letter, index) => (
        <motion.button
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 200,
          }}
          onClick={() => handleLetterClicked(letter)}
          disabled={
            guessedLetters.includes(letter) || allLettersGuessed || healthUsedUp
              ? true
              : false
          }
          className={`${
            guessedLetters.includes(letter)
              ? "opacity-25 cursor-not-allowed"
              : "hover:bg-blue hover:text-white cursor-pointer"
          } flex justify-center items-center min-w-6  md:max-w-[109px] h-[56px] md:h-[84px] bg-white text-dark-navy text-2xl md:text-5xl leading-default tracking-[2%] md:tracking-[5%] uppercase rounded-lg md:rounded-3xl duration-150`}
          key={index}
        >
          {letter}
        </motion.button>
      ))}
    </div>
  );
}
