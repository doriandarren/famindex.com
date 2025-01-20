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
                            <NavLink to="/" className="navigation__link">Inicio</NavLink>
                            <NavLink to="/about" className="navigation__link">Quienes somos</NavLink>
                            <NavLink to="/contact" className="navigation__link">Contacto</NavLink>
                            <NavLink to="/milena" className="navigation__link">Milena</NavLink>
                            <NavLink to="/dilan" className="navigation__link">Dilan</NavLink>
                            <NavLink to="/dorian" className="navigation__link">Dorian</NavLink>
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
