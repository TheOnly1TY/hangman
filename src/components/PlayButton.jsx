import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function PlayButton() {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Link
        to="/category"
        className="shadow-[inset_0_-4px_0_5px_#243041,inset_0_-12px_0_11px_#9d2df5] w-[10rem] h-[10rem] md:w-[12.5rem] md:h-[12.5rem] flex justify-center items-center bg-[linear-gradient(to_bottom,_#fe71fe,_#7199ff)] rounded-full cursor-pointer"
      >
        <figure>
          <img src="/icon-play.svg" alt="play" />
        </figure>
      </Link>
    </motion.button>
  );
}
