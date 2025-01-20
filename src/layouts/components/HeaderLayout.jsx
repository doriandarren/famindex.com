import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import app1 from '../../assets/images/app_1.svg';


export const HeaderLayout = () => {

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__bar">

                        <div className="header__logo">
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


                    <div className="header__grid">
                        <div className="header__text">
                            <h1 className="header__heading">Recibe y realiza pagos en tu móvil con nucleus</h1>
                            <a className="header__button" href="#">Obtener cuenta</a>
                        </div>

                        <div className="header__grafico">
                            <img className="header__image" src={app1} alt="imagen nucleus app" />
                        </div>

                    </div>

                </div>
            </header>
        </>
    )
}
