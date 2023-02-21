import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import './index.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='About' element={<About />} />
    </Routes>
    </>
  )
}

export default App
