
import style from "../AboutSection/AboutSection.module.scss";
// import SectionImg from  '../../assets/img/pcHeader.jpg'
import ShowMeYourSkills from '../SkillCarousel/Skills'

export function AboutSection() {
  return (
    <>
      <section id="about" className={style.gridCol}>

            {/* <img className={style.sectiononeimg} src={SectionImg} alt="#" /> */}

   
        <article>
          <h2>About Section is here</h2>
          
          <p>
  Welcome to my portfolio! I'm Eon4, a passionate web developer dedicated to crafting innovative solutions in the digital realm. 
  With a keen eye for design and a knack for problem-solving, I specialize in creating captivating 
  webpages and applications that not only meet but exceed expectations. From sleek and user-friendly 
  interfaces to robust and efficient backend systems, I thrive on turning ideas into reality. 
  Join me on this journey as we explore the endless possibilities of web development together.
</p>
        
        </article>
    {/* <h3 className={style.sectionSkills} >Skills are shown here</h3> */}

        <ShowMeYourSkills/>

      </section>
    </>
  );
}