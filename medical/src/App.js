import logo from './logo.svg';
import './App.css';
import Home from './componenets/Home';
import MedicineTable from './componenets/MedicineTable';
import Header from './componenets/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='table' element={<MedicineTable />}/>
        </Routes>
       
      </header>
    </div>
  );
}

export default App;
