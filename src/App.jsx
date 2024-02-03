import promoImg from "./assets/img/promo.jpg";
import Button from "./button";

export default function App() {
  const headerHome = "Home";
  const headerAbout = "About";
  const headerContact = "Contact";
  const conditionRender = 1;
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];
  return (
    <>
      <header className="header">
        <h1>LOGO</h1>
        <ul className="menu__list">
          <li className="menu__item">{headerHome}</li>
          <li className="menu__item">{headerAbout}</li>
          <li className="menu__item">{headerContact}</li>
        </ul>
        {conditionRender == 1 ? (
          <Button btnName={"order"} />
        ) : (
          <button>without props</button>
        )}
      </header>
      <main className="main">
        <section className="promo">
          <img src={promoImg} alt="" />
        </section>
        <ul>
          {people.map((item) => (<li key={item}>{item}</li>) )}
        </ul>
      </main>
      <footer className="footer">
        <div className="social-networks"></div>
      </footer>
    </>
  );
}
