import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Employees from './components/Datagrid';
import Contact from './components/Form';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/employees' element={<Employees/>} />
      <Route exact path='/contact' element={<Contact/>} />
    </Routes>
    </>
  );
};

export default App;

