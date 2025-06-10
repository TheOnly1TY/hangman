import { BackAndMenuButton } from "../components/BackAndMenuButton";
import Data from "../../data.json";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function Category() {
  const categories = Object.keys(Data.categories);
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`${category}`);
  };
  const handleNavigateBack = () => {
    navigate("/");
  };

  return (
    <>
      <motion.header
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="md:relative flex items-center justify-between md:justify-center py-15"
      >
        <BackAndMenuButton onAction={handleNavigateBack}>
          <img
            src="/icon-back.svg"
            className="w-[17.5px] md:w-[27.91px] lg:w-auto"
          />
        </BackAndMenuButton>
        <h1 className="text-5xl md:text-[6.5rem] lg:text-[8.5rem] leading-none font-normal -tracking-[0.5%] text-gradient-stroke">
          Pick a Category
        </h1>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center lg:gap-x-8 md:gap-8 gap-y-4 lg:gap-y-[50px] pb-20">
        {categories.map((category, index) => (
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 200,
            }}
            key={index}
            onClick={() => handleNavigate(category)}
            className="flex justify-center items-center bg-blue shadow-[inset_0_-2px_0_3px_#140E66,inset_0_1px_0_6px_#3c74ff] h-[77px] md:h-[182.67px] lg:h-[190px] text-2xl md:text-5xl text-white uppercase rounded-[20px] ld:rounded-[2.5rem] font-normal leading-default tracking-[5%] cursor-pointer hover:bg-[#5B8AFF] active:bg-[#5B8AFF] hover:duration-150"
          >
            {category}
          </motion.button>
        ))}
      </div>
    </>
  );
}
