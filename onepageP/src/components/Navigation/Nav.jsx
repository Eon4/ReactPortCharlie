
import style from './Nav.module.scss'

export const Navigation = () => {
 
    const navItems = [
        { route: "Home" },
        { route: "Projects" },
        { route: "About" },
        { route: "Contact" },
      ];
    
      return (
        <nav className={style.navStyle}>
          <div>
            {navItems.map((item, i) => {
              return <a key={i}>{item.route}</a>;
            })}
          </div>
        </nav>
      );
    };