import { useNavigate } from "react-router-dom";

export function BackButton({ children, style }) {
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate("/");
  };
  return (
    <figure
      onClick={handleNavigateBack}
      className={`md:absolute md:left-0 flex justify-center items-center w-10 md:w-[64px] lg:w-[94px] h-10 md:h-[64px] lg:h-[94px] rounded-full bg-[linear-gradient(to_bottom,_#FE71FE,_#7199FF)] shadow-[inset_0_-6px_0_7px_#9D2DF540] cursor-pointer ${style}`}
    >
      {children}
    </figure>
  );
}
