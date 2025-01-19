import logo from '../../../assets/images/logo.svg';
import app1 from '../../../assets/images/app_1.svg';


export const DorianPage = () => {
  return (
    <>
    
    <header className="header">
        <div className="header__contenedor">
            <div className="header__barra">

                <div className="header__logo">
                    <img src={logo} alt="logo nucleus" />
                </div>

                <nav className="navegacion">
                    <a href="#" className="navegacion__link">¿Qué es?</a>
                    <a href="#" className="navegacion__link">¿Cómo funciona?</a>
                    <a href="#" className="navegacion__link">Precios</a>
                    <a href="#" className="navegacion__link">Contratar</a>
                </nav>

            </div>

            <div className="header__grid">
                <div className="header__texto">
                    <h1 className="header__heading">Recibe y realiza pagos en tu móvil con nucleus</h1>
                    <a className="header__boton" href="#">Obtener cuenta</a>
                </div>

                <div className="header__grafico">
                    <img className="header__imagen" src={app1} alt="imagen nucleus app" />
                </div>

            </div>

        </div>
    </header>
    
    </>
  )
}
