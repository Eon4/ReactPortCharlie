//logo.jsx
import style from '../Logo/Logo.module.scss';
import logo from '../../assets/img/robotLogo.svg';

const Logo = () => {

    return (
        <div className={style.logo}> 
      {/* <img className={style.logoImg} src={logo} alt='Logo'/> */}
      <a href="https://github.com/Eon4"  target="_blank" rel="noopener noreferrer">
      <h1 className={style.logoText}>Eon4</h1></a>
    </div>
      );
    }

export default Logo;
