import './App.css';
import Navbars from './components/Navbars';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Places from './components/Places';
import Booking from './components/Booking';
import Login from './components/Login';
import Payment from './components/Payment';
import Signup from './components/Signup';
import { useEffect, useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    // Check if token is present in local storage
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true); // Update isLoggedIn state if token is found
    }
  }, []); // Run only once after initial render

  return (
    <>
      <Navbars setSearchTerm={setSearchTerm} isLoggedIn={isLoggedIn} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Places searchTerm={searchTerm} />} />
          <Route path='/book/:id' element={<Booking />} />
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
