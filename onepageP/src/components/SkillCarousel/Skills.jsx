
import style from '../Logo/Logo.module.scss';
import reactIcon from '../../assets/img/reacticon.svg';

const ShowMeYourSkills = () => {

    return (
        <div>
            <h2>Skills shown here</h2> 
      <img className={style.skilsimages} src={reactIcon} alt='reactIcon'/>
    </div>
      );
    }

export default ShowMeYourSkills;
