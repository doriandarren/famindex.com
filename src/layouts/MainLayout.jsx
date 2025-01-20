//import { useState } from "react";

import logo from '../assets/images/logo.svg';
import app1 from '../assets/images/app_1.svg';




export const MainLayout = ({ children }) => {
  //const [menuOpen, setMenuOpen] = useState(false);

  return (

    <>

      

      <header className="header">
          <div className="header__contenedor">
              <div className="header__barra">

                  <div className="header__logo">
                      <img src={logo} alt="logo nucleus" />
                  </div>

                  <nav className="navegacion">
                      <a href="/" className="navegacion__link">Home</a>
                      <a href="/about" className="navegacion__link">Quienes somos</a>
                      <a href="/contact" className="navegacion__link">Contacto</a>
                      <a href="/milena" className="navegacion__link">Milena</a>
                      <a href="/dilan" className="navegacion__link">Dilan</a>
                      <a href="/dorian" className="navegacion__link">Dorian</a>
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


      <main>{children}</main>

    </>

  );
};
