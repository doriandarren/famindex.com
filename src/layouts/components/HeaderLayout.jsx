import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';


export const HeaderLayout = () => {

    return (
        <>
            <div className="navbar__container">
                <div className="navbar__bar">

                    <div className="navbar__logo">
                        <Link to="/">
                            <img src={logo} alt="logo nucleus" />
                        </Link>
                    </div>

                    <nav className="navigation">
                        <NavLink 
                            className={({ isActive }) => `navigation__link ${ isActive ? 'navigation__link--active' : '' }`}
                            to="/" 
                        >
                            Inicio
                        </NavLink>

                        <NavLink 
                            className={({ isActive }) => `navigation__link ${ isActive ? 'navigation__link--active' : '' }`}
                            to="/about"
                        >
                            Quienes somos
                        </NavLink>

                        <NavLink 
                            className={({ isActive }) => `navigation__link ${ isActive ? 'navigation__link--active' : '' }`}
                            to="/contact"
                        >
                            Contacto
                        </NavLink>

                        <NavLink 
                            className={({ isActive }) => `navigation__link ${ isActive ? 'navigation__link--active' : '' }`}
                            to="/milena"
                        >
                            Milena
                        </NavLink>

                        <NavLink 
                            className={({ isActive }) => `navigation__link ${ isActive ? 'navigation__link--active' : '' }`}
                            to="/dilan"
                        >
                            Dilan
                        </NavLink>

                        <NavLink 
                            className={({ isActive }) => `navigation__link ${ isActive ? 'navigation__link--active' : '' }`}
                            to="/dorian"
                        >
                            Dorian
                        </NavLink>

                    </nav>

                </div>
            </div>
        </>
    )
}
