import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Searchbar from './components/pages/Searchbar';
import Lawyers from './components/pages/Lawyers';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><Searchbar /><Services /><Lawyers /><About /><Contact /></>} />
          <Route path="/services" element={<div style={{ marginTop: '9%', marginBottom: '15%' }}><Services /></div>} />
          <Route path="/lawyers" element={<div style={{ marginTop: '-6%', marginBottom: '3%' }}><Lawyers /></div>} />
          <Route path="/about" element={<div style={{ marginTop: '7%', marginBottom: '12%' }}><About /></div>} />
          <Route path="/contact" element={<div style={{ marginTop: '7%' }}><Contact /></div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
