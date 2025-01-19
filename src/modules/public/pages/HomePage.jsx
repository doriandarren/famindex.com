import logo from '../../../assets/images/logo.svg';


export const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="text-center py-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded">
        <h2 className="text-black text-4xl font-bold mb-4">Desarrollo de Software a Medida</h2>
        <p className="text-lg">Creamos soluciones específicas para tus necesidades.</p>
      </section> */}

      

      {/* <section className="relative bg-primary-dark text-white py-16">
        <div className="absolute bottom-0 w-full">
          <svg
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M0,192L48,186.7C96,181,192,171,288,149.3C384,128,480,96,576,96C672,96,768,128,864,160C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="relative container mx-auto text-center px-6 py-10">
            <h2 className="text-4xl font-bold mb-4">Nucleus es seguro</h2>
            <p className="text-lg mb-6">Creamos soluciones específicas para tus necesidades.</p>
            <a
              href="#"
              className="bg-white text-purple-700 font-medium py-3 px-6 rounded-lg shadow-md hover:bg-purple-50 transition duration-300"
            >
              Contáctanos
            </a>
          </div>
      </section> */}



      

      {/* <section className="relative bg-blue-500 text-white py-16">
        <div className="relative container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Bienvenido a Nucleus</h2>
          <p className="text-lg mb-6">Creamos soluciones específicas para tus necesidades.</p>
          <a
            href="#"
            className="bg-white text-blue-500 font-medium py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Contáctanos
          </a>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#0099ff"
              fillOpacity="1"
              d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section> */}



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



      <section className="div_custom">
        <h2 className="div_custom_h2">Desarrollo de Software a Medida</h2>
        <p className="div_custom_p">Creamos soluciones específicas para tus necesidades.</p>
      </section>




      {/* Services Section */}
      <section id="services" className="py-16">
        <h3 className="text-3xl font-semibold text-center mb-8 text-primary-dark">Nuestros Servicios</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-neutral-light rounded-lg shadow">
            <h4 className="text-xl font-bold mb-2 text-primary">Desarrollo Web</h4>
            <p>Diseñamos aplicaciones web modernas y personalizadas.</p>
          </div>
          <div className="p-6 bg-neutral-light rounded-lg shadow">
            <h4 className="text-xl font-bold mb-2 text-primary">Apps Móviles</h4>
            <p>Creamos apps para iOS y Android adaptadas a tu negocio.</p>
          </div>
          <div className="p-6 bg-neutral-light rounded-lg shadow">
            <h4 className="text-xl font-bold mb-2 text-primary">Sistemas Empresariales</h4>
            <p>Desarrollamos software ERP/CRM adaptado a tus procesos.</p>
          </div>
        </div>
      </section>
    </>
  );
};
