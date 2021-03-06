import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/about' style={{ marginLeft: '2rem' }}>
          About
        </Link>
        <Link to='/contact' style={{ marginLeft: '2rem' }}>
          Contact
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='*'
          element={<h1 style={{ marginLeft: '2rem' }}>Not Found</h1>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
