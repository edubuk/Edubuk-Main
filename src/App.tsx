import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast';
function App() {

  return (
    <>
    <Toaster /> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
