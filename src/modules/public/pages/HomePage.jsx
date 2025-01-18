
export const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded">
        <h2 className="text-black text-4xl font-bold mb-4">Desarrollo de Software a Medida</h2>
        <p className="text-lg">Creamos soluciones específicas para tus necesidades.</p>
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
