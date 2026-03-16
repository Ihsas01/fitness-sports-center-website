import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-fitness-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
