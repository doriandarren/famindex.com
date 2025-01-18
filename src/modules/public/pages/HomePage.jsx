
import logo from '../../../assets/images/logo.svg';
import app_1 from '../../../assets/images/app_1.svg';
import headerBg from '../../../assets/images/header_bg.svg';




export const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="text-center py-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded">
        <h2 className="text-black text-4xl font-bold mb-4">Desarrollo de Software a Medida</h2>
        <p className="text-lg">Creamos soluciones específicas para tus necesidades.</p>
      </section> */}

      <header className="header" style={{ '--header-bg': `url(${headerBg})` }}>
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
                    <img className="header__imagen" src={app_1} alt="imagen nucleus app" />
                </div>

            </div>

        </div>
    </header>


    </>
  );
};
