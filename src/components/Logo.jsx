import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.figure
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: "spring" }}
      className="absolute -top-14 md:-top-25 w-[250.54px] md:w-[373.69px] lg:w-auto"
    >
      <img src="/logo.svg" alt="logo" />
    </motion.figure>
  );
}
