import app1 from "../../../assets/images/app_1.svg";

export const HomePage = () => {
  return (
    <>
      <main className="main">
        <div className="main__container">
          <div className="main__grid">
            <div className="main__text">
              <h1 className="main__heading">
                Recibe y realiza pagos en tu móvil con nucleus
              </h1>
              <a className="main__button" href="#">
                Obtener cuenta
              </a>
            </div>
            <div className="main__graphic">
              <img
                className="main__image"
                src={app1}
                alt="imagen nucleus app"
              />
            </div>
          </div>
        </div>
      </main>

      <section className="nucleus">
        <h2 className="nucleus__heading">¿Qué es?</h2>
        <div className="nucleus__container">
          <div className="nucleus__grid">
            <div className="list__item">
              <h2 className="list__heading">Fácil</h2>
              <p className="list__text">
                Crea una cuenta, envía tu documentación y comienza a utilizar
                nucleus en un par de horas
              </p>
            </div>

            <div className="list__item">
              <h2 className="list__heading">Seguro</h2>
              <p className="list__text">
                Por su tecnología digital nucleus es imposible de hackear o
                robar
              </p>
            </div>

            <div className="list__item">
              <h2 className="list__heading">Administrable</h2>
              <p className="list__text">
                Añade o tranfiere fondos a tu banco, añade limites o controla
                tus gastos
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="commissions">
        <div className="commissions__container">
          <h2 className="commissions__heading">Comisiones</h2>

          <div className="commissions__grid">
            <div className="commissions__content">
              <p className="commissions__text">
                The more you use Nucleus, the less you pay:
              </p>

              <div className="list">
                <div className="list__item list__item--2col">
                  <p className="list__number">3%</p>
                  <p className="list__text">
                    de todas tus transacciones si tus movimientos son menores a $999 USD
                  </p>
                </div>

                <div className="list__item list__item--2col">
                  <p className="list__number">2.5%</p>
                  <p className="list__text">
                    de todas tus transacciones si tus movimientos son mayores a $999 USD.
                  </p>
                </div>
              </div>
            </div>

            <div className="commissions__image">
              {/* <img src="img/app_3.svg" alt="App image" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

