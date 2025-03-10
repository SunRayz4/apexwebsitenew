import '../css/bootstrap.min.css';
import '../css/bootstrap-icons.css';
import Home1 from '../components/Home'; 
import Navbar from '../components/navbar'; 
import Faci from '../components/facilities'; 
import Footer from '../components/footer'; // Import the Footer component
import Hero from '../components/hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Faci />
      <Home1 />
      <Footer /> {/* Add the Footer component here */}
    </>
  );
}
