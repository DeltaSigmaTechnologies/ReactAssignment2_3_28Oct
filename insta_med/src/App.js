import logo from './logo.svg';
import Home from './components/Home';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom';
import Order from './components/Order';

function App() {
  return (
    <>
    <Header />        
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/place-your-order" element={<Order />} />
    </Routes>
    
    </>
    );
}

export default App;
