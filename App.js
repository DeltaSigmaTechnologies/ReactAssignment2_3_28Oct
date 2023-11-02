import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Menu from './components/Menu';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
   
      <header>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="menu" element={<Menu/>}/>
          
        </Routes>
      {/* <Home/>
      <Menu/>
  */}
      </header>
   
  );
}

export default App;
