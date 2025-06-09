import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wordToGuess: null,
  selectedCategoryWords: [],
  isMenuOpen: false,
  gameResult: false,
  guessedLetters: [],
  keySound: "/minimal-pop-click-ui-3-198303.mp3",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame() {
      return { ...initialState };
    },
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
        const resetWords = categoryWord.map((word) => ({
          ...word,
          selected: false,
        }));
        state.selectedCategoryWords = resetWords;
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

    updateSelectedWords(state, action) {
      const word = action.payload;
      state.selectedCategoryWords = [...state.selectedCategoryWords, word];
    },

    handleGuesses(state, action) {
      const audio = new Audio(state.keySound);
      const letter = action.payload;
      audio.play();
      state.guessedLetters.push(letter);
    },
    handleCloseModal(state, action) {
      const modalState = action.payload;
      state.isMenuOpen = modalState;
    },
  },
});
export const {
  resetGame,
  initializeGame,
  updateSelectedWords,
  handlePlayAgain,
  handleCloseModal,
  handleGuesses,
  updateGameResult,
} = gameSlice.actions;

export default gameSlice.reducer;
