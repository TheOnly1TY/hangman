import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainMenu } from "./pages/MainMenu";
import { HowToPlay } from "./pages/HowToPlay";
import { Category } from "./pages/Category";
import { CategoryLayout } from "./pages/CategoryLayout";
import { InGame } from "./pages/inGame/InGame";
import { PageNotFound } from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/guide" element={<HowToPlay />} />
        <Route path="/category" element={<CategoryLayout />}>
          <Route index element={<Category />} />
          <Route path=":selectedCategory" element={<InGame />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
