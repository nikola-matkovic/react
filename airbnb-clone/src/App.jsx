import NavBar from './components/NavBar/nav.jsx';
import Hero from './components/hero/hero.jsx';
import Card from './components/card/card'
import cardsData from './components/card/cards.json';
import style from './App.module.css';

function App() { 
  return (
    <>
      <NavBar />
      <Hero />
      <section className={style.cardList}>
      {
        cardsData.map((card, index) => {
          return <Card
          key = {index}
          {...card}
          />
      })}
      </section>
    </>
  );
}

export default App;
