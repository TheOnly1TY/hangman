import { Outlet } from "react-router-dom";

export function CategoryLayout() {
  return (
    <section className="bg-[url(/background-mobile-dark.svg)] md:bg-[url(/background-tablet-dark.svg)] lg:bg-[url(/background-desktop-dark.svg)] bg-center bg-cover bg-no-repeat min-h-screen">
      <div className="px-[1.5rem] md:max-w-[800px] lg:max-w-[1216px] mx-auto font-display">
        <Outlet />
      </div>
    </section>
  );
}
