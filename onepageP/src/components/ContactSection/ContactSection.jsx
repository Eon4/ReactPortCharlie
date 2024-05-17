
import style from "../ContactSection/ContactSection.module.scss";
import Handshake from '../../assets/img/handshake.jpg'
import gitHub from '../../assets/img/Contacticons/gitMe.svg';
import eMail from '../../assets/img/Contacticons/eMailme.svg';
import linkedIn from '../../assets/img/Contacticons/linkedin-icon.svg';

export function ContactSection() {
  return (
    <>
      <section id="contact" className={style.gridCol}>
      <h2>Let's start a <span>Project </span></h2>  

      {/* <img className={style.sectiononeimg} src={Handshake} alt="#" /> */}
            
          {/* <h2>Contact section here</h2> */}

<div  className={style.Contacticons}  >
  <a href="https://github.com/Eon4"  target="_blank" rel="noopener noreferrer">
<img className={style.icon} src={gitHub} alt="Icon" /></a>

{/* <a href="https://example.com"  target="_blank" rel="noopener noreferrer">
<img className={style.icon} src={eMail} alt="Icon" /></a> */}

<a href="https://example.com"  target="_blank" rel="noopener noreferrer">

<img className={style.icon} src={linkedIn} alt="Icon" /></a>
</div>
<h2><span>Contact:</span></h2>  
<h2>cl.<span>webtech</span>@<span>outlook </span>.com</h2>  

      </section>
    </>
  );
}