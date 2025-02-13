import { Link, NavLink } from "react-router";
import classNames from "classnames";
import logo from '../../assets/images/logo.svg';


export const HeaderLayout = () => {

    const navLinks = [
        { to: "/", label: "Inicio" },
        { to: "/about", label: "Quienes somos" },
        { to: "/contact", label: "Contacto" },
    ];

    return (
        <>
            <header className="header__container">
                <div className="header__bar">

                    <div className="header__logo">
                        <Link to="/">
                            <img src={logo} alt="logo nucleus" />
                        </Link>
                    </div>

                    <nav className="navbar">
                        {navLinks.map(({ to, label }) => (
                          <li 
                            key={to} 
                            className="navbar__item"
                          >
                              <NavLink
                                to={to}
                                className={({ isActive }) =>
                                  classNames("navbar__link", {
                                    "navbar__link--active": isActive,
                                  })
                                }
                              >
                                {label}
                              </NavLink>
                          </li>
                        ))}
                        
                    </nav>

                </div>
            </header>
        </>
    )
}
