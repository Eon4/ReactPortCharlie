//HolographicCard Component 
import style from '../Holographic/HolographicCard.module.scss';
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
  
  const ShowMeTheHolograph = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={style.card}>
            <div className={style.holo}></div>
            <img
                src={icons[currentIndex]}
                alt="icon"
                className={`${style.icon} ${style.fadeIn}`}
            />
        </div>
    );
};

export default ShowMeTheHolograph;