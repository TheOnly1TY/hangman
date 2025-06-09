import { useDispatch } from "react-redux";
import { handleCloseModal } from "../gameSlice";
import { maximumHealth } from "../../../utils/helpers";
import { useParams } from "react-router-dom";
import { BackButton } from "../../../components/BackButton";

export function GameHeader({ incorrectGuesses }) {
  const { selectedCategory } = useParams();
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between items-center py-15">
      <div className="flex justify-center items-center">
        <BackButton
          style="md:static"
          onAction={() => dispatch(handleCloseModal(true))}
        >
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
        <div className="relative w-[57px] h-4 md:w-[160px] lg:w-[240px] md:h-[31px] bg-white rounded-full overflow-hidden">
          <div
            className="absolute border-4 md:border-8 md:max-w-[158px] lg:max-w-[238px] mx-auto top-0 left-0 h-full border-white bg-[#261676] rounded-full transition-all duration-300 ease-in-out"
            style={{
              width: `${(incorrectGuesses.length / maximumHealth) * 100}%`,
              minWidth: incorrectGuesses.length > 0 ? "6px" : "0px",
            }}
          ></div>
        </div>

        <figure>
          <img
            src="/icon-heart.svg"
            alt="heart-icon"
            className="w-[26.16px] md:w-auto"
          />
        </figure>
      </div>
    </header>
  );
}
