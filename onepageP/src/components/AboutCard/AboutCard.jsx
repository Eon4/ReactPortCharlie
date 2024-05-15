
import style from '../AboutCard/AboutCard.module.scss';
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

export default function AboutCard() {
  return (
    <>
     <section id="about" className={style.gridCol}>
      {/* Map over the icons array to render each card */}
      {icons.map((icon, index) => (
        <div key={index} className={style.glassBox}>
          <div className={style.glassBox__imgBox}>
            {/* Use the icon as the src attribute */}
            <img src={icon} alt="Icon" />
            <h3 className={style.glassBox__title}>Name</h3>
          </div>
          <div className={style.glassBox__content}>Lorem, ipsuipisci fugit qui quaerat!</div>
        </div>
      ))}
    </section>
    </>
  );
}