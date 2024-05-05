import style from '../SkillCarousel/Skills.module.scss';
import { useEffect, useState } from "react";
import reactIcon from '../../assets/img/Skillicons/reacticon.svg';
import HTMLIcon from '../../assets/img/Skillicons/html.svg';
import JSIcon from '../../assets/img/Skillicons/css.svg';
import CSSIcon from '../../assets/img/Skillicons/jsicon.svg';
import gitIcon from '../../assets/img/Skillicons/git.svg';
import GraphQLIcon from '../../assets/img/Skillicons/graphql.svg';
import SassIcon from '../../assets/img/Skillicons/scss.svg';
import VSIcon from '../../assets/img/Skillicons/vsCode.svg';
import NodeJSIcon from '../../assets/img/Skillicons/nodeJS.svg';
import PostmanIcon from '../../assets/img/Skillicons/postMan.svg';
import MySQLIcon from '../../assets/img/Skillicons/mySQL.svg';
import FigmaIcon from '../../assets/img/Skillicons/Figma.svg';
import PSIcon from '../../assets/img/Skillicons/PS.svg';
import XDIcon from '../../assets/img/Skillicons/XD.svg';
import GimpIcon from '../../assets/img/Skillicons/gimp.svg';

const icons = [
  reactIcon,
  HTMLIcon,
  JSIcon,
  CSSIcon,
  gitIcon,
  GraphQLIcon,
  SassIcon,
  VSIcon,
  NodeJSIcon,
  PostmanIcon,
  MySQLIcon,
  FigmaIcon,
  PSIcon,
  XDIcon,
  GimpIcon
];

const ShowMeYourSkills = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true); 
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [currentIconIndex]);

  const handleDotClick = (index) => {
    setCurrentIconIndex(index);
    setFadeIn(true); // Start of the fade-in for the selected icon
  };

  return (
    <div className={style.galleryContainer}>
      <div className={style.gallery}>
        <div className={style.myIcons}>
          <span>
            {icons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Icon ${index}`}
                className={(index === currentIconIndex && fadeIn) ? style.fadeIn : style.fadeOut}
              />
            ))}
          </span>
        </div>
      </div>
      <div className={style.navigationDots}>
        {icons.map((_, index) => (
          <span
            key={index}
            className={index === currentIconIndex ? style.active : ''}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowMeYourSkills;