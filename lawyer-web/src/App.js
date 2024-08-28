import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Searchbar from './components/pages/Searchbar';
import Lawyers from './components/pages/Lawyers';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Searchbar />
      <Services />
      <Lawyers />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
