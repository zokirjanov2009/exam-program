import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Services from './pages/services/Services'
import FreeGuide from './pages/freeGuide/FreeGuide'
import ExtraSales from './pages/ExtraSales/ExtraSales'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/FreeGuide' element={<FreeGuide/>} />
        <Route path='/ExtraSalespage' element={<ExtraSales/>} />
      </Routes>
    </div>
  )
}

export default App
