import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Navigation/Nav";
// import style from './MainLayout.module.scss'

export const MainLayout = () => {

  return (
    <main>
      <Navigation/>
        <Outlet/>
      <Footer />
    </main>
  );
};