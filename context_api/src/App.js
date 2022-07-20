import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState([]);

  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route exact path='/' element={<Home cart={cart} setCart ={setCart}/>}/>
    <Route exact path='/cart' element={<Cart cart={cart} setCart ={setCart}/>}/>
    </Routes>
    </div>
  );
}

export default App;
