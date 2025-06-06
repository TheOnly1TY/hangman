import { useNavigate } from "react-router-dom";

export function GuideButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/guide");
  };
  return (
    <button
      className="bg-blue text-white hover:hover:bg-[#5B8AFF] active:bg-[#5B8AFF] hover:duration-150 text-SM leading-[120%] tracking-[5%] uppercase font-display rounded-[2.5rem] px-16 py-3 shadow-[inset_0_-2px_0_3px_#140E66,inset_0_1px_0_6px_#3C74FF] cursor-pointer"
      onClick={handleClick}
    >
      How to Play
    </button>
  );
}
