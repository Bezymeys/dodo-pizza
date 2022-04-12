import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Main from './pages/main/Main.jsx';
import About from './pages/about/About.jsx';
import Footer from './components/footer/Footer.jsx';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import Admin from './pages/admin/Admin';
import Dashboard from './pages/dashboard/Dashboard';
import Createpizza from './pages/create-pizza/CreatePizza';
import { Api } from './api/Api';
import { pizzaApi } from './constants/api';

function App() {
    const [basket, setBasket] = useState([]);
    const [pizzas, setPizzas] = useState([]);

    const addToBasket = (pizza) => {
      setBasket([...basket, pizza]);
    };

    useEffect(() => {
      const data = JSON.parse(localStorage.getItem("basket")) || [];
      setBasket(data);
      Api.get(pizzaApi)
        .then((res) => {
          setPizzas(res.data);
        })
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
            <Route path="/" element={<Main addToBasket={addToBasket} pizzas={pizzas}  />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard  pizzas={pizzas} />} />
            <Route path='/create-pizza' element={<Createpizza />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
=======
import Admin from './pages/admin/Admin.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import CreatePizza from './pages/create-pizza/CreatePizza.jsx';
import { Api } from './api/Api.js';
import { pizzaApi } from './constants/api.js';

function App() {
  const [basket, setBasket] = useState([]);
  const [pizzas, setPizzas] = useState([]);

  const addToBasket = (pizza) => {
    setBasket([...basket,  pizza]);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(data);
    
    Api.get(pizzaApi) 
    .then((res) => {
      setPizzas(res.data)
    })
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
          <Route path="/" element={<Main addToBasket={addToBasket} pizzas={pizzas} />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard pizzas={pizzas} />} />
          <Route path="/create-pizza" element={<CreatePizza />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
>>>>>>> d7a56aded6841d73b7ba1505428fbf680485c908

export default App;
