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

const ShowMeYourSkills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={style.carouselContainer}>
      <div className={style.carousel}>
        <div className={style.scope}>
          <span style={{ '--i': 1 }}><img src={reactIcon} alt="React" /></span>
          <span style={{ '--i': 2 }}><img src={HTMLIcon} alt="HTML" /></span>
          <span style={{ '--i': 3 }}><img src={JSIcon} alt="JavaScript" /></span>
          <span style={{ '--i': 4 }}><img src={CSSIcon} alt="CSS" /></span>
          <span style={{ '--i': 5 }}><img src={gitIcon} alt="Git" /></span>
          <span style={{ '--i': 6 }}><img src={GraphQLIcon} alt="GraphQL" /></span>
          <span style={{ '--i': 7 }}><img src={SassIcon} alt="Sass" /></span>
          <span style={{ '--i': 8 }}><img src={VSIcon} alt="VS Code" /></span>
          <span style={{ '--i': 9 }}><img src={NodeJSIcon} alt="Node.js" /></span>
          <span style={{ '--i': 10 }}><img src={PostmanIcon} alt="Postman" /></span>
          <span style={{ '--i': 11 }}><img src={MySQLIcon} alt="MySQL" /></span>
          <span style={{ '--i': 12 }}><img src={FigmaIcon} alt="Figma" /></span>
          <span style={{ '--i': 13 }}><img src={PSIcon} alt="Photoshop" /></span>
          <span style={{ '--i': 14 }}><img src={XDIcon} alt="Adobe XD" /></span>
          <span style={{ '--i': 15 }}><img src={GimpIcon} alt="GIMP" /></span>
        </div>
      </div>
    </div>
  );
};

export default ShowMeYourSkills;

