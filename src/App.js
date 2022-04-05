import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Main from './pages/main/Main.jsx';
import About from './pages/about/About.jsx';
import Footer from './components/footer/Footer.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [basket, setBasket] = useState([]);
  const addToBasket = (pizza) => {
    setBasket([...basket,  pizza]);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("basket"));
    setBasket(data);
  }, [])

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket))
  }, [basket])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar basket={basket} />
        <Routes>
          <Route path="/" element={<Main addToBasket={addToBasket} />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
