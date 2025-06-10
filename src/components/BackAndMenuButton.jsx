import { motion } from "framer-motion";

export function BackAndMenuButton({ children, style, onAction }) {
  return (
    <motion.figure
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onClick={onAction}
      className={`
        relative 
        md:absolute md:left-0 
        flex justify-center items-center 
        w-10 md:w-[64px] lg:w-[94px] 
        h-10 md:h-[64px] lg:h-[94px] 
        rounded-full 
        bg-[linear-gradient(to_bottom,_#FE71FE,_#7199FF)] 
        shadow-[inset_0_-6px_0_7px_#9D2DF540] 
        cursor-pointer 
        ${style}
      `}
    >
      {children}
    </motion.figure>
  );
}
