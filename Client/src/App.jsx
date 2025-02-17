import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Tools from './Pages/Tools/Tools';
import ToolsView from './Pages/ToolsView/ToolsView';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import UserProfile from './Pages/UserProfile/UserProfile';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects' element={<ToolsView />}/>
        <Route path="/projects/:toolsId" element={<Tools />} />
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
        <Route path='/login-signup' element={<LoginSignup />}/>
        <Route path='/user-profile' element={<UserProfile />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
