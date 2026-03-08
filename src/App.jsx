import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/global.css';
import Home from './pages/Home';

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

  return <Home />;
};

export default App;
