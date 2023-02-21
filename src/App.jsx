import About from './components/pages/about/About';
import Home from './components/pages/home/Home';
import Contact from './components/pages/contact/Contact';
import { Routes, Route } from 'react-router-dom';

import './index.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />}/>
    </Routes>
    </>
  )
}

export default App
