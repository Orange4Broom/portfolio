import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation'
import Homepage from './components/homepage/HomePage'
import './index.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/'>
        <section className='Home'>
            <Navigation />
            <Homepage />
        </section>
      </Route>
    </Routes>

    <Routes path='About'>
     <section className='About'></section>
    </Routes>
      

          

    </>
  )
}

export default App
