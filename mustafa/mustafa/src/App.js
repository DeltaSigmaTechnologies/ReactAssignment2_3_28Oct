import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Aboutme" element={<Aboutme/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
