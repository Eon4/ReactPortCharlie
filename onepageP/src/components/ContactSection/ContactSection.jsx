

import style from "../ContactSection/ContactSection.module.scss";
import Handshake from '../../assets/img/handshake.jpg'
import gitHub from '../../assets/img/Contacticons/github_icon.svg';
import eMail from '../../assets/img/Contacticons/email_icon.svg';
import linkedIn from '../../assets/img/Contacticons/linkedin-icon.svg';


export function ContactSection() {
  return (
    <>
      <section id="contact" className={style.gridCol}>
      <h2>
            Let's <span>Connect! </span> 

</h2>  

      {/* <img className={style.sectiononeimg} src={Handshake} alt="#" /> */}
            
          {/* <h2>Contact section here</h2> */}

<div  className={style.Contacticons}  >
<img className={style.icon} src={gitHub} alt="Icon" />
<img className={style.icon} src={eMail} alt="Icon" />
<img className={style.icon} src={linkedIn} alt="Icon" />
</div>
      </section>
    </>
  );
}