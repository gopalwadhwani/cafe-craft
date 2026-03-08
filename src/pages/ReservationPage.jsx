import Navbar from '../components/Navbar';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';

const ReservationPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <Reservation />
            </main>
            <Footer />
        </>
    );
};

export default ReservationPage;
