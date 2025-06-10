import { motion } from "framer-motion";

export function ActionButton({ text, styles, onAction, animation }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={animation}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className={`bg-blue text-white hover:hover:bg-[#5B8AFF] active:bg-[#5B8AFF] hover:duration-150 h-[62px] text-SM leading-[120%] tracking-[5%] uppercase font-display rounded-[2.5rem]  shadow-[inset_0_-2px_0_3px_#140E66,inset_0_1px_0_6px_#3C74FF] cursor-pointer ${styles}`}
      onClick={onAction}
    >
      {text}
    </motion.button>
  );
}
