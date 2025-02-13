import logoBlanco from '../../assets/images/logo-blanco.svg';

export const FooterLayout = () => {
  return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__grid">

                <div className="footer__logo">
                    <img src={logoBlanco} alt="logo blanco" />
                </div>
                
            </div>
        </div>
    </footer> 
  )
}
