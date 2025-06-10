import { useDispatch } from "react-redux";
import { handleIsMenuOpen } from "../gameSlice";
import { maximumHealth } from "../../../utils/helpers";
import { useParams } from "react-router-dom";
import { BackAndMenuButton } from "../../../components/BackAndMenuButton";
import { motion } from "framer-motion";

export function GameHeader({ incorrectGuesses }) {
  const { selectedCategory } = useParams();
  const dispatch = useDispatch();

  return (
    <motion.header
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="flex justify-between items-center py-15"
    >
      <div className="flex justify-center items-center">
        <BackAndMenuButton
          style="md:static"
          onAction={() => dispatch(handleIsMenuOpen(true))}
        >
          <img
            src="/icon-menu.svg"
            alt="menu-icon"
            className="w-4 md:w-[25.87px] lg:w-auto"
          />
        </BackAndMenuButton>
        <h1 className="text-[2.5rem] md:text-5xl lg:text-[5.5rem] -tracking-[0.5%] lg:tracking-0 text-white leading-default ml-4 md:ml-8 lg:ml-[57px]">
          {selectedCategory}
        </h1>
      </div>
      <div className="flex justify-center items-center gap-x-4 md:gap-x-10">
        <div className="relative w-[57px] h-4 md:w-[160px] lg:w-[240px] md:h-[31px] bg-white rounded-full overflow-hidden">
          <div
            className="absolute border-4 md:border-8 w-[57px] md:max-w-[158px] lg:max-w-[238px] mx-auto top-0 left-0 h-full border-white rounded-full transition-all duration-300 ease-in-out"
            style={{
              backgroundColor:
                incorrectGuesses.length === 0 ? "white" : "#261676",
              width: `${(incorrectGuesses.length / maximumHealth) * 100}%`,
              minWidth: incorrectGuesses.length > 0 ? "10px" : "0px", // Ensure it's visible from first guess
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
    </motion.header>
  );
}
