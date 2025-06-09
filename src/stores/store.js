import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "../pages/inGame/gameSlice";
const store = configureStore({
  reducer: {
    game: gameSlice,
  },
});

export default store;
