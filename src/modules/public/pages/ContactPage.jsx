import { Button } from "../../../layouts/components/Button";
import { Section } from "../../../layouts/components/Section";

export const ContactPage = () => {
  return (
    <>
      <Section
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        className="bg-gray-100"
      >
        <div className="contact__grid">
          {/* Formulario de Contacto */}
          <form className="contact__form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <Button
              variant="secondary"
              onClick={() => alert("Primary Button Clicked!")}
            >
              <span>Hola</span>
            </Button>
          </form>

          {/* Información de Contacto */}
          <div className="contact__info">
            <p>
              <strong>📍 Address:</strong> 1234 Street Name, City, Country
            </p>
            <p>
              <strong>📞 Phone:</strong> +1 234 567 890
            </p>
            <p>
              <strong>✉ Email:</strong> contact@nucleus.com
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};
