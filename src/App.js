import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Main from './pages/main/Main.jsx';
import About from './pages/about/About.jsx';
import Footer from './components/footer/Footer.jsx';
import { useEffect, useState } from 'react';
import Admin from './pages/admin/Admin';
import Dashboard from './pages/dashboard/Dashboard';
import Createpizza from './pages/create-pizza/CreatePizza';
import { Api } from './api/Api';
import { pizzaApi } from './constants/api';
import { useDispatch} from 'react-redux'

function App() {
    const dispatch = useDispatch();


    useEffect(() => {
      // const data = JSON.parse(localStorage.getItem("basket")) || [];
      Api.get(pizzaApi)
        .then((res) => {
          dispatch({
            type: "SET PIZZAS",
            data: res.data
          })
        })
    }, [])


    // useEffect(() => {
    //   localStorage.setItem("basket", JSON.stringify(basket))
    // }, [basket])


    const click = () => {
      dispatch( {
        type: "SET PIZZAS", 
        name: "TemirLan "
      })
    }


    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Navbar />
          <button onClick={click}>hjklhghjbkl</button>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/create-pizza' element={<Createpizza />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
export default App