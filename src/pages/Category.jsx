import { BackButton } from "../components/BackButton";
import Data from "../../data.json";
import { Outlet, useNavigate } from "react-router-dom";

export function Category() {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    console.log(category);
    navigate(`${category}`);
  };
  const categories = Object.keys(Data.categories);
  return (
    <>
      <header className="md:relative flex items-center justify-between md:justify-center py-15">
        <BackButton>
          <img
            src="/icon-back.svg"
            className="w-[17.5px] md:w-[27.91px] lg:w-auto"
          />
        </BackButton>
        <figure className="w-[185px] md:w-[343px] lg:w-auto">
          <img src="/category-text.svg" alt="category-text" />
        </figure>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center lg:gap-x-8 md:gap-8 gap-y-4 lg:gap-y-[50px] pb-20">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleNavigate(category)}
            className="flex justify-center items-center bg-blue shadow-[inset_0_-2px_0_3px_#140E66,inset_0_1px_0_6px_#3c74ff] h-[77px] md:h-[182.67px] lg:h-[190px] text-2xl md:text-5xl text-white uppercase rounded-[20px] ld:rounded-[2.5rem] font-normal leading-default tracking-[5%] cursor-pointer hover:bg-[#5B8AFF] active:bg-[#5B8AFF] hover:duration-150"
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
}
