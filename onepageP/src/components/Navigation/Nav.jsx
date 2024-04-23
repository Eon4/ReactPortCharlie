
import style from './Nav.module.scss'

export const Navigation = () => {

  return (
    <nav className={style.navStyle}>
      <div>
      <a href="#CL">CL</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};