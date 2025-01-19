
export const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded">
        <h2 className="text-black text-4xl font-bold mb-4">Acerca de Nosotros</h2>
        <p className="text-lg">Conoce más sobre nuestra misión, visión y equipo.</p>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-8 text-primary-dark">Nuestra Historia</h3>
          <p className="text-lg text-neutral-dark text-center mb-12">
            En <span className="font-bold text-primary">Famindex</span>, creemos en el poder del software personalizado. Desde nuestros inicios, nos hemos dedicado a ofrecer soluciones a medida que se adaptan a las necesidades específicas de cada cliente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-neutral-light rounded-lg shadow">
              <h4 className="text-xl font-bold mb-2 text-primary">Nuestra Misión</h4>
              <p>
                Ayudar a las empresas a alcanzar sus objetivos mediante software innovador y adaptado a sus necesidades.
              </p>
            </div>
            <div className="p-6 bg-neutral-light rounded-lg shadow">
              <h4 className="text-xl font-bold mb-2 text-primary">Nuestra Visión</h4>
              <p>
                Ser líderes en desarrollo de software a medida, reconocidos por nuestra excelencia técnica y atención al cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
