import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wordToGuess: null,
  selectedCategoryWords: [],
  isMenuOpen: false,
  gameResult: false,
  guessedLetters: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    initializeGame(state, action) {
      const categoryWord = action.payload;
      Object.assign(state, {
        ...initialState,
        selectedCategoryWords: state.selectedCategoryWords,
      });

      !categoryWord
        ? state.selectedCategoryWords
        : (state.selectedCategoryWords = categoryWord);

      let unselectedWords = state.selectedCategoryWords.filter(
        (word) => !word.selected
      );
      if (unselectedWords.length === 0) {
        const resetWords = state.selectedCategoryWords.map((word) => ({
          ...word,
          selected: false,
        }));
        unselectedWords = resetWords;
      }
      if (unselectedWords.length > 0) {
        const randomWord =
          unselectedWords[Math.floor(Math.random() * unselectedWords.length)];
        state.selectedCategoryWords = state.selectedCategoryWords.map((word) =>
          word.name === randomWord.name ? { ...word, selected: true } : word
        );
        unselectedWords = state.selectedCategoryWords.filter(
          (word) => !word.selected
        );
        state.wordToGuess = randomWord;
      }
    },

    updateGameResult(state) {
      state.gameResult = !state.gameResult;
    },

    handleGuesses(state, action) {
      const letter = action.payload;

      if (state.guessedLetters.includes(letter)) return;
      state.guessedLetters.push(letter);
    },

    handleIsMenuOpen(state, action) {
      state.isMenuOpen = action.payload;
    },

    resetGame() {
      return { ...initialState };
    },
  },
});
export const {
  resetGame,
  initializeGame,
  handlePlayAgain,
  handleIsMenuOpen,
  handleGuesses,
  updateGameResult,
} = gameSlice.actions;

export default gameSlice.reducer;
