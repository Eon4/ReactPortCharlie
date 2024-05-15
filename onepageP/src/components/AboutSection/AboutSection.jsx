
import style from "../AboutSection/AboutSection.module.scss";
import Aboutimg from  '../../assets/img/deskTop.jpg'

import AboutCard from '../AboutCard/AboutCard';

export function AboutSection() {
  return (
    <>
      <section id="about" className={style.gridCol}>

            <img className={style.aboutMeimg} src={Aboutimg} alt="#" />

   
        <article>
          
          <h2>
  I'm a passionate <span>web developer</span>  dedicated to crafting <span>innovative projects</span>  in the digital realm. 
   I thrive on <span>learning by doing</span> and turning <span>ideas </span>into <span>reality. </span> 
  Join me on this <span>journey</span> as we explore the endless <span>possibilities</span> of web development <span>together.</span>
</h2>
        
        </article>


      </section>
    </>
  );
}