import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainMenu } from "./pages/MainMenu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
}
