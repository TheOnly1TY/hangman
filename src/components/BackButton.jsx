export function BackButton({ children, style, onAction }) {
  return (
    <figure
      onClick={onAction}
      className={`md:absolute md:left-0 flex justify-center items-center w-10 md:w-[64px] lg:w-[94px] h-10 md:h-[64px] lg:h-[94px] rounded-full bg-[linear-gradient(to_bottom,_#FE71FE,_#7199FF)] shadow-[inset_0_-6px_0_7px_#9D2DF540] cursor-pointer ${style}`}
    >
      {children}
    </figure>
  );
}
