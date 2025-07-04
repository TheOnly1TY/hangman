import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Data from "../../../data.json";
import {
  handleIsMenuOpen,
  initializeGame,
  updateGameResult,
} from "./gameSlice";
import { Modal } from "../../components/Modal";
import { GameWordDisplay } from "./components/GameWordDisplay";
import { GameHeader } from "./components/GameHeader";
import { GameKeyboard } from "./components/GameKeyboard";
import { maximumHealth } from "../../utils/helpers";

export function InGame() {
  const { selectedCategory } = useParams();
  const selectedCategoryWords = Data.categories[selectedCategory];
  const dispatch = useDispatch();
  const wordToGuess = useSelector((state) => state.game.wordToGuess);
  const guessedLetters = useSelector((state) => state.game.guessedLetters);
  const isMenuOpen = useSelector((state) => state.game.isMenuOpen);
  const gameResult = useSelector((state) => state.game.gameResult);

  useEffect(() => {
    dispatch(initializeGame(selectedCategoryWords));
  }, [dispatch, selectedCategoryWords]);

  const word = wordToGuess?.name
    ? wordToGuess?.name.replaceAll(" ", "").toLowerCase()
    : "";

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !word.includes(letter.toLowerCase())
  );

  const allLettersGuessed =
    word &&
    word
      .split("")
      .every((letter) => guessedLetters.includes(letter.toLowerCase()));

  const healthUsedUp = maximumHealth === incorrectGuesses.length;

  // CONDITION FOR WIN OR LOSE
  useEffect(() => {
    if ((healthUsedUp || allLettersGuessed) && !gameResult) {
      setTimeout(() => {
        dispatch(updateGameResult());
      }, 500);
    }
  }, [dispatch, healthUsedUp, gameResult, allLettersGuessed]);

  const handlePlayAgain = () => {
    dispatch(initializeGame());
  };

  return (
    <section className="font-display">
      <GameHeader incorrectGuesses={incorrectGuesses} />
      <GameWordDisplay healthUsedUp={healthUsedUp} />
      <GameKeyboard
        allLettersGuessed={allLettersGuessed}
        healthUsedUp={healthUsedUp}
      />

      {/* WIN OR LOSE MODEL  */}
      {gameResult && (
        <Modal actionLabel="Play Again" onAction={() => handlePlayAgain()}>
          <h1 className="text-[94px] md:text-[134px] leading-none font-normal -tracking-[0.5%] text-gradient-stroke">
            {healthUsedUp ? "You Lose" : "You Win"}
          </h1>
        </Modal>
      )}

      {/* HAMBURGER CLICK MODEL MENU */}
      {isMenuOpen && (
        <Modal
          actionLabel="Continue"
          onAction={() => dispatch(handleIsMenuOpen(false))}
        >
          <h1 className="text-[94px] md:text-[134px] leading-none font-normal -tracking-[0.5%] text-gradient-stroke">
            Paused
          </h1>
        </Modal>
      )}
    </section>
  );
}
