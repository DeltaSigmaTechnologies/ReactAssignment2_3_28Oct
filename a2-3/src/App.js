import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Employees from './components/Datagrid';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/employees' element={<Employees/>} />
    </Routes>
    </>
  );
};

export default App;

