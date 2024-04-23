
import style from './Nav.module.scss'
import ScrollToTop from "react-scroll-to-top";
import { Link } from 'react-router-dom';


export const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={style.navStyle}>
      <div>
        <Link to="/" onClick={() => scrollToSection('about')}>About</Link>
        <Link to="/projects" onClick={() => scrollToSection('projects')}>Projects</Link>
        <Link to="/contact" onClick={() => scrollToSection('contact')}>Contact</Link>
        <ScrollToTop smooth />

      </div>
    </nav>
  );
};