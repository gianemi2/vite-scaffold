import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Navbar } from './components/Navbar'
import { DarkModeProvider } from './context/DarkModeContext'

function App() {

  return (
    <DarkModeProvider>
      <Navbar />
      <Container className="mt-4 mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Container>
    </DarkModeProvider>
  )
}

export default App
