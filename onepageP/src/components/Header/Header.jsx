import { useEffect, useState } from 'react';
import style from '../Header/Header.module.scss';
import Artimage from '../../assets/img/Portimg/artimage.jpg'
export function Header() {

  const [typedText, setTypedText] = useState('');
  const fullText = "Tomorrow's Websites.";

  useEffect(() => {
    let currentIndex = 0;
    const typingTimer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingTimer);
      }
    }, 150); 

    return () => clearInterval(typingTimer);
  }, []);

  return (
    <header className={style.headerContainer}>
      <div className={style.textContainer}>
        <h1 className={style.headerStyle}>
          Hello!<span> You can call me</span> Cecilia
        </h1>
        <h2>
          I craft <span> Digital Solutions</span> for <span>{typedText}</span>
        </h2>
      </div>
      <div className={style.hero}>
        <img className={style.myHero} src={Artimage} alt="heroimage" />
        <div className={style.wavyBorder}></div>
      </div>
    </header>
  );
}