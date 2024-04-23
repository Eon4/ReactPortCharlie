
import style from '../Header/Header.module.scss'
import HeaderImg from  '../../assets/img/pcHeader.jpg'

export function Header(){
    return (
        <header>
            <h1 className={style.headerStyle}>Header<span> Test</span></h1>
            <p className={style.title}>Llalalal jd jnmfdw oids fcoikj falock d ckojfde</p>
            <img className={style.Headerimg} src={HeaderImg} alt="header" />

        </header>
    )
}