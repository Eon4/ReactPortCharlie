import { useEffect, useState } from 'react';
import style from '../Header/Header.module.scss';
import HeaderImg from '../../assets/img/HeaderMine02.png';

export function Header() {
  const [scrollPos, setScrollPos] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPos(currentPosition);

      // Checking if the user is scrolling down or up
      if (currentPosition > scrollPos) {
        // Scrolling down
        setIsBlurred(true);
      } else {
        // Scrolling up
        setIsBlurred(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  return (
    <header>
      <h1 className={style.headerStyle}>
        Welcome to<span> my Portfolio</span>
      </h1>
      {/* <p className={style.title}>Welcome to my Portfolio</p> */}
      <div className={style.HeaderContainer}>
        <img
          className={`${style.Headerimg} ${isBlurred ? style.blurred : ''}`}
          src={HeaderImg}
          alt="header"
          style={{ transform: `translateY(-${scrollPos * 0.3}px)` }}
        />
      </div>
    </header>
  );
}
