import { useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton";

export function InGame() {
  const { selectedCategory } = useParams();
  return (
    <section className="font-display">
      <header className="flex justify-between items-center py-15">
        <div className="flex justify-center items-center">
          <BackButton style="lg:static">
            <img src="/public/icon-menu.svg" alt="menu-icon" />
          </BackButton>
          <h1 className="text-[5.5rem] text-white leading-default ml-[57px]">
            {selectedCategory}
          </h1>
        </div>
        <div className="flex justify-center items-center gap-x-10">
          <progress max={8} value={2} />
          <figure>
            <img src="/public/icon-heart.svg" alt="heart-icon" />
          </figure>
        </div>
      </header>
    </section>
  );
}
