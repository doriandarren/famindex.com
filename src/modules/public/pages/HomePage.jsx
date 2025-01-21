import app1 from '../../../assets/images/app_1.svg';


export const HomePage = () => {
  return (
    <>
      <header className="header">
          <div className="header__container">
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


      <section className="bg-primary-dark text-white py-16">
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



      <div className="card card--featured">
        <h2 className="card__title">Título Destacado</h2>
        <p className="card__description text-gray-600">
          Este es el contenido destacado de la tarjeta.
        </p>
        <button className="btn btn-primary">
          Leer Más
        </button>
      </div>


    </>
  );
};
