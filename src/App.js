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
        <Link to='/component-navigation/about' style={{ marginLeft: '2rem' }}>
          About
        </Link>
        <Link to='/component-navigation/contact' style={{ marginLeft: '2rem' }}>
          Contact
        </Link>
      </div>
      <Routes>
        <Route path='/component-navigation' element={<Home />} />
        <Route path='/component-navigation/about' element={<About />} />
        <Route path='/component-navigation/contact' element={<Contact />} />
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
