import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast';
import UserRegistration from './components/Auth/UserRegistration';
import UserLogin from './components/Auth/UserLogin';


function App() {

  return (
    <>
    <Toaster /> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/sign-up' element={<UserRegistration />}></Route>
        <Route path='/login' element={<UserLogin />}></Route>
      </Routes>
    </>
  )
}

export default App
