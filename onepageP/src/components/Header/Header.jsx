import { useEffect, useState } from 'react';
import style from '../Header/Header.module.scss';
import Artimage from '../../assets/img/Portimg/artimage.jpg'

export function Header() {
  return (
    <header className={style.headerContainer}>
     
      <div className={style.textContainer}>
        <h1 className={style.headerStyle}>
          Welcome to<span> my Portfolio</span>
        </h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris ut
          officia deserunt mollit anim id est laborum."</p>
      </div>
      <div className={style.hero}>
        <img className={style.myHero} src={Artimage} alt="" />
        <div className={style.wavyBorder}></div>
      </div>
    </header>
  );
}