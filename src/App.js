import logo from './logo.svg';
import './App.css';
import { FaBomb, FaHeart, FaProjectDiagram, FaStar } from "react-icons/fa";

function App() {
  return (
    <div className="App">
    <h1><FaBomb />  </h1>
    <h1><FaStar /></h1>
    <h1><FaHeart style={{color: 'red'}}/></h1>
    <h1><FaProjectDiagram style={{color: 'green'}}/></h1>
    </div>
  );
}

export default App;
