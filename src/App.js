import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Main from './pages/main/Main.jsx';
import About from './pages/about/About.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  const pizzaArray = [
    {
      title: "2 Сыра",
      description: "Соберите свою пиццу 35 см с двумя разными вкусами",
      price: 390,
      img: "https://mevishcafe.com.ng/wp-content/uploads/2021/08/Pizza.jpg"
    },
    {
      title: "3 Сыра",
      description: "Соберите свою пиццу 35 см с двумя разными вкусами",
      price: 390,
    },
    {
      title: "4 Сыра",
      description: "Соберите свою пиццу 35 см с двумя разными вкусами",
      price: 390,
      img: "https://mevishcafe.com.ng/wp-content/uploads/2021/08/Pizza.jpg"
    }
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar basket={pizzaArray} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
