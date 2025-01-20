import logoBlanco from '../../assets/images/logo-blanco.svg';


export const FooterLayout = () => {
  return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__grid">

                <div className="footer__logo">
                    <img src={logoBlanco} alt="logo blanco" />
                </div>

                {/* <nav className="navegacion">
                    <a href="#" className="navegacion__link navegacion__link--blanco">¿Qué es?</a>
                    <a href="#" className="navegacion__link navegacion__link--blanco">¿Cómo funciona?</a>
                    <a href="#" className="navegacion__link navegacion__link--blanco">Precios</a>
                    <a href="#" className="navegacion__link navegacion__link--blanco">Contratar</a>
                </nav> */}

            </div>
        </div>
    </footer> 
  )
}
