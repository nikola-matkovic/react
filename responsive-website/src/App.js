import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import RouterPage from './components/RouterPage';
function App() {
  return (
    <Routes>
      <Route paht="/" elemen="test"></Route>
      <Route paht="/" element={"about"}></Route>
      <Route paht="/" element={"help"}></Route>
    </Routes>
    );
}

export default App;
