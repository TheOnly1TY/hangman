import { useSelector } from "react-redux";

export function GameWordDisplay({ healthUsedUp }) {
  const wordToGuess = useSelector((state) => state.game.wordToGuess);
  const guessedLetters = useSelector((state) => state.game.guessedLetters);

  return (
    <div className="flex justify-center items-center flex-wrap gap-x-2 gap-y-3 md:gap-x-3 md:gap-y-4 lg:gap-4">
      {wordToGuess && wordToGuess.name
        ? wordToGuess?.name.split("").map((text, index) => {
            if (text === " ") {
              return <div key={index} className="basis-full h-0 w-0" />; // Line break
            }

            return (
              <div
                key={index}
                className={`${
                  guessedLetters.includes(text.toLowerCase()) || healthUsedUp
                    ? "opacity-100"
                    : "opacity-25"
                } flex justify-center items-center w-10 text-white h-[66px] md:w-[88px] md:h-[112px] lg:w-[112px] lg:h-[128px] bg-blue shadow-[inset_0_-2px_0_3px_#140E66,inset_0_1px_0_6px_#3C74FF] text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] leading-default uppercase rounded-xl md:rounded-4xl lg:rounded-[2.5rem]`}
              >
                {guessedLetters.includes(text.toLowerCase()) || healthUsedUp
                  ? text
                  : null}
              </div>
            );
          })
        : ""}
    </div>
  );
}
