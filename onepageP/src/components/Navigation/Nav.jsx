
import style from './Nav.module.scss'

export const Navigation = () => {
 
    const navItems = [
        { route: "CL" },
        { route: "About" },
        { route: "Projects" },
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