import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import { Routes,Route } from 'react-router-dom';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Aboutme" element={<Aboutme/>}/>
          <Route exact path="/Table"  element={<Table/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
