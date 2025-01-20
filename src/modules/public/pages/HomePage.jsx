import logo from '../../../assets/images/logo.svg';
import logoBlanco from '../../../assets/images/logo-blanco.svg';


export const HomePage = () => {
  return (
    <>
      <section className="wave-section bg-primary-dark text-white py-16">
        {/* Contenido */}
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Bienvenido a Nucleus</h2>
          <p className="text-lg mb-6">Creamos soluciones específicas para tus necesidades.</p>
          <a
            href="#"
            className="bg-white text-primary-dark font-medium py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Contáctanos
          </a>
        </div>
      </section>



      <div className="card card--featured bg-yellow-100 border-yellow-500">
        <h2 className="card__title text-2xl font-bold text-gray-800">Título Destacado</h2>
        <p className="card__description text-gray-600">
          Este es el contenido destacado de la tarjeta.
        </p>
        <button className="card__button bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Leer Más
        </button>
      </div>






      <footer className="footer">
        <div className="footer__contenedor">
            <div className="footer__grid">
                <div className="footer__logo">
                    <img src={logoBlanco} alt="logo blanco" />
                </div>

                <nav className="navegacion">
                    <a href="#" className="navegacion__link navegacion__link--blanco">¿Qué es?</a>
                    <a href="#" className="navegacion__link navegacion__link--blanco">¿Cómo funciona?</a>
                    <a href="#" className="navegacion__link navegacion__link--blanco">Precios</a>
                    <a href="#" className="navegacion__link navegacion__link--blanco">Contratar</a>
                </nav>

            </div>
        </div>
    </footer>



    </>
  );
};
