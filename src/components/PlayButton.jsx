import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function PlayButton() {
  const navigate = useNavigate();
  const handleCategoryNavigate = () => {
    navigate("/category");
  };
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="shadow-[inset_0_-4px_0_5px_#243041,inset_0_-12px_0_11px_#9d2df5] w-[10rem] h-[10rem] md:w-[12.5rem] md:h-[12.5rem] flex justify-center items-center bg-[linear-gradient(to_bottom,_#fe71fe,_#7199ff)] rounded-full cursor-pointer"
      onClick={handleCategoryNavigate}
    >
      <img src="/icon-play.svg" alt="play" />
    </motion.button>
  );
}
