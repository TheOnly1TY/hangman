import { useNavigate } from "react-router-dom";
import { ActionButton } from "../components/ActionButton";

export function PageNotFound() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <section className="bg-[url(/background-mobile-dark.svg)] md:bg-[url(/background-tablet-dark.svg)] lg:bg-[url(/background-desktop-dark.svg)] bg-center bg-cover bg-no-repeat min-h-screen">
      <div className=" flex justify-center items-center text-center flex-col h-screen text-white px-[1.5rem] md:max-w-[800px] lg:max-w-[1216px] mx-auto font-display">
        <h1 className="text-5xl md:text-8xl lg:text-[134px] mb-5">
          404: Page Not Found
        </h1>
        <p className="text-lg leading-default tracking-[5%] mb-10">
          No worries, it’s not your fault! Just click the button below to return
          home, and everything will be sorted out.
        </p>
        <ActionButton
          text="Go Home"
          styles="w-[250px] lg:w-[274px]"
          onAction={goHome}
        />
      </div>
    </section>
  );
}
