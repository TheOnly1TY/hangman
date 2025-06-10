import { useNavigate } from "react-router-dom";
import { BackAndMenuButton } from "../components/BackAndMenuButton";
import { motion } from "framer-motion";

const howToPlaySteps = [
  {
    step: "01",
    heading: "Choose a category",
    description:
      "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    step: "02",
    heading: "Guess letters",
    description:
      "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    step: "03",
    heading: "Win or lose",
    description:
      "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];

export function HowToPlay() {
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate("/");
  };
  return (
    <section className="bg-[url(/background-mobile-dark.svg)] md:bg-[url(/background-tablet-dark.svg)] lg:bg-[url(/background-desktop-dark.svg)] bg-center bg-cover bg-no-repeat min-h-screen">
      <div className="px-[1.5rem] md:max-w-[800px] lg:max-w-[1216px] mx-auto font-display">
        <motion.header
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          exit={{ y: -250 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="md:relative flex items-center justify-between md:justify-center py-15"
        >
          <BackAndMenuButton onAction={handleNavigateBack}>
            <img
              src="/icon-back.svg"
              className="w-[17.5px] md:w-[27.91px] lg:w-auto"
            />
          </BackAndMenuButton>
          <h1 className="text-5xl md:text-[6.5rem] lg:text-[8.5rem] leading-none font-normal -tracking-[0.5%] text-gradient-stroke">
            How to Play
          </h1>
        </motion.header>

        <ul className="flex justify-center items-stretch flex-col lg:flex-row gap-8 pb-20">
          {howToPlaySteps.map((data) => (
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
              }}
              key={data.step}
              className="flex flex-col justify-center md:flex-row md:items-center lg:flex-col lg:justify-start w-full lg:w-[24rem] min-h-[11.6rem] md:min-h-[12.5rem] lg:min-h-[34.4rem] p-8 lg:px-12 lg:py-[3.75rem] bg-white rounded-[1.25rem] md:rounded-[2.5rem] lg:text-center md:gap-10 lg:gap-0"
            >
              {/* Step and heading for small screens */}
              <div className="flex items-center gap-x-4">
                <h3 className="text-2xl md:text-[5.5rem] text-blue leading-default font-normal lg:pb-10">
                  {data.step}
                </h3>
                <h2 className="text-2xl text-dark-navy leading-default tracking-[5%] font-normal md:hidden lg:hidden">
                  {data.heading}
                </h2>
              </div>

              {/* Heading and description for medium and large screens */}
              <div className="pt-4 md:pt-0">
                <h2 className="hidden md:block text-dark-navy font-normal leading-default tracking-[5%] md:text-[2.5rem] lg:text-5xl md:pb-4 lg:pb-10">
                  {data.heading}
                </h2>
                <p className="text-base md:text-xl lg:text-[1.625rem] text-[#887DC0] font-normal leading-default tracking-[5%]">
                  {data.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
