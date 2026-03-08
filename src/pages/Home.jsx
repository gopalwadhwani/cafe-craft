import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import SpecialOffers from '../components/SpecialOffers';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Reservation from '../components/Reservation';
import Location from '../components/Location';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Menu />
                <SpecialOffers />
                <Gallery />
                <Testimonials />
                <Reservation />
                <Location />
            </main>
            <Footer />
        </>
    );
};

export default Home;
