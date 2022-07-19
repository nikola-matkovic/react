import './App.module.css';
import Nav from './components/nav/Nav'
import VisitedPlace from './components/visitedPlace/VisitedPlace'
import places from './components/visitedPlace/places.json';

function App() {
  let placesComponents = places.map(  (place, index) =>  <VisitedPlace  key={index} {...place} />)
  return (
    <>
      <Nav />
      {placesComponents}
    </>
  );
}

export default App;