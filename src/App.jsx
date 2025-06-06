import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainMenu } from "./pages/MainMenu";
import { HowToPlay } from "./pages/HowToPlay";
import { Category } from "./pages/Category";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/guide" element={<HowToPlay />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}
