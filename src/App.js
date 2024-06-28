import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/NavBar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home/Home';
import MenFashion from './components/men-fashion/MenFashion';
import WomenFasion from './components/women-fashion/WomenFasion';
import Shop from './components/shop/Shop';

function App() {
  return (
    <div > 
      <NavBar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/men-fashion' element={<MenFashion />}></Route>
            <Route path='/women-fashion' element={<WomenFasion />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
        </Routes>    
    </div>
  );
}

export default App;
