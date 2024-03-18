
import './App.css'
import Navbar from './components/template/Navbar'
import Footer from './components/template/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/page/Home'
import Login from './components/page/Auth/Login'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route>
            <Route path='/' exact element={<Home />} />
            <Route path='/login' exact element={<Login />} />
          </Route>
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
