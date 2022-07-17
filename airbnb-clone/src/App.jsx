import './App.css';
import NavBar from './components/NavBar/nav.jsx';
import Hero from './components/hero/hero.jsx';
import Card from './components/card/card'
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Card 
        image="0"
        mark="5.0"
        number="6" 
        country="USA" 
        title="Life lessons with Katie Zaferes"
        price="$136"
        status="SOLD OUT"
      />
      <Card 
        image="1"
        mark="5.0"
        number="30" 
        country="USA" 
        title="Learn wedding photography"
        price="$125"
        status="ONLINE"
      />
      <Card
        image="1"
        mark="4.8"
        number="2" 
        country="USA" 
        title="Group Mountain Biking"
        price="$50"
        status=""
      />
    </>
  );
}

export default App;
