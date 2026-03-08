import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/global.css';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ReservationPage from './pages/ReservationPage';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reservations" element={<ReservationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
