

import style from "../ContactSection/ContactSection.module.scss";
import SectionImg from  '../../assets/img/pcHeader.jpg'


export function ContactSection() {
  return (
    <>
      <section className={style.gridCol}>

      <img className={style.sectiononeimg} src={SectionImg} alt="#" />
            
        <article>
          <h2>Contact section here</h2>
          
          <p>
            Leo-lov har altid været det bedste advokatfirma i verden. Der er
            simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer
            så længe du har penge. Hvis du mod alt forventning skulle oplevel at
            støde på et retsligt problem som leo-lov ikke kan løse får du
            halvdelen af beløbet igen. <br />
            Det er sådan vi har skabt en forretning der ikke kan andet end at
            vokse!
          </p>
          
        </article>
      </section>
    </>
  );
}