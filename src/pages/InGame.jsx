import { useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import { Modal } from "../components/Modal";

export function InGame() {
  const { selectedCategory } = useParams();
  const alphaBets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );
  console.log(alphaBets);
  return (
    <section className="font-display">
      <header className="flex justify-between items-center py-15">
        <div className="flex justify-center items-center">
          <BackButton style="md:static">
            <img
              src="/icon-menu.svg"
              alt="menu-icon"
              className="w-4 md:w-[25.87px] lg:w-auto"
            />
          </BackButton>
          <h1 className="text-[2.5rem] md:text-5xl lg:text-[5.5rem] -tracking-[0.5%] lg:tracking-0 text-white leading-default ml-4 md:ml-8 lg:ml-[57px]">
            {selectedCategory}
          </h1>
        </div>
        <div className="flex justify-center items-center gap-x-4 md:gap-x-10">
          <progress
            max={8}
            value={4}
            className="w-[57px] h-4 md:w-[160px] lg:w-[240px] md:h-[31px] appearance-none border-none rounded-full bg-transparent"
          />
          <figure>
            <img
              src="/icon-heart.svg"
              alt="heart-icon"
              className="w-[26.16px] md:w-auto"
            />
          </figure>
        </div>
      </header>
      {/* <Modal>
        <img src="/Paused-text.svg" />
      </Modal> */}
      <div className="grid grid-cols-9 lg:gap-6 md:gap-x-4 gap-x-2 gap-y-6">
        {alphaBets.map((letter, index) => (
          <button
            className="flex justify-center items-center min-w-6 md:max-w-[109px] h-[56px] md:h-[84px] bg-white text-dark-navy text-2xl md:text-5xl leading-default tracking-[2%] md:tracking-[5%] uppercase rounded-lg md:rounded-3xl cursor-pointer"
            key={index}
          >
            {letter}
          </button>
        ))}
      </div>
    </section>
  );
}
