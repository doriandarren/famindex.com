import { Section } from "../../../components/Sections/Section";

export const AboutPage = () => {
  return (
    <>
      <Section
        title="Quiénes Somos"
        subtitle="Conoce más sobre nuestra misión y valores"
        className="bg-gray-100"
      >
        <div className="about__grid">
          
          {/* Contenido sobre la empresa */}
          <div className="about__content">
            <p>
              En <strong>Nucleus</strong>, creemos en el poder de la tecnología
              para simplificar las transacciones financieras. Nuestra misión es
              ofrecer soluciones seguras, rápidas y confiables para la gestión
              de pagos, ahorros e inversiones.
            </p>
            <p>
              Con un equipo de profesionales dedicados y tecnología de
              vanguardia, nos esforzamos por crear un ecosistema donde la
              libertad financiera sea accesible para todos.
            </p>

            <div className="about__values">
              <div className="about__value">
                <h3>🔒 Seguridad</h3>
                <p>
                  Tu información financiera está protegida con los más altos
                  estándares.
                </p>
              </div>

              <div className="about__value">
                <h3>🚀 Innovación</h3>
                <p>
                  Mejoramos continuamente nuestra plataforma con las últimas
                  tecnologías.
                </p>
              </div>

              <div className="about__value">
                <h3>🤝 Confianza</h3>
                <p>
                  Construimos relaciones transparentes con nuestros clientes y
                  socios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
