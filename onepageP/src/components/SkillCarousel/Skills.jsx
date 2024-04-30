
import style from '../SkillCarousel/Skills.module.scss';
import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
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

const skillIcons = [
  { icon: reactIcon, name: 'React' },
  { icon: HTMLIcon, name: 'HTML' },
  { icon: JSIcon, name: 'JavaScript' },
  { icon: CSSIcon, name: 'CSS' },
  { icon: gitIcon, name: 'Git' },
  { icon: GraphQLIcon, name: 'GraphQL' },
  { icon: SassIcon, name: 'Sass' },
  { icon: VSIcon, name: 'VS Code' },
  { icon: NodeJSIcon, name: 'Node.js' },
  { icon: PostmanIcon, name: 'Postman' },
  { icon: MySQLIcon, name: 'MySQL' },
  { icon: FigmaIcon, name: 'Figma' },
  { icon: PSIcon, name: 'Photoshop' },
  { icon: XDIcon, name: 'Adobe XD' },
  { icon: GimpIcon, name: 'GIMP' },
];

const ShowMeYourSkills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={style.carouselContainer}>
      <div className={style.carousel}>
        {skillIcons.map((skill, index) => (
          <div
            key={index}
            className={style.scope}
            style={{
              '--i': index + 1,
              transform: `rotateY(calc(var(--i) * 45deg)) translateZ(350px)`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className={hoveredIndex === index ? style.hovered : ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowMeYourSkills;