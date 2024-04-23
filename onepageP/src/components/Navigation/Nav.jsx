
import style from './Nav.module.scss'
import ScrollToTop from "react-scroll-to-top";


export const Navigation = () => {

  return (
    <nav className={style.navStyle}>
      <div>
      <a href="#Eon4">Eon4</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <ScrollToTop smooth />

      </div>
    </nav>
  );
};