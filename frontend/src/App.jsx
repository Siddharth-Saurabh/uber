import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import UserLogin from './pages/userLogin';
import UserSignUp from './pages/userSignUp';
import CaptainLogin from './pages/captainLogin';
import CaptainSignUp from './pages/captainSignUp';
import Home from './pages/Hoome';
import UserProtectWrapper from './pages/userProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/captainHome';
import CaptainProtectWrapper from './pages/captainProtectWrapper';
import CaptainLogout from './pages/captainLLogOut';
function App() {

  return (
  <>
  <div>
    <Routes>
      <Route path="/" element={<Start/>} />
      <Route path="/login" element={<UserLogin/>} />
      <Route path="/signup" element={<UserSignUp/>} />
      <Route path="/captain-login" element={<CaptainLogin/>} />
      <Route path="/captain-signup" element={<CaptainSignUp/>} />
      <Route path="/home" element={<UserProtectWrapper><Home/></UserProtectWrapper>} />
      <Route path="/user/logout" element={<UserProtectWrapper><UserLogout/></UserProtectWrapper>}/>
      <Route path="/captain-home" element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>} />
      <Route path="/captain/logout" element={<CaptainProtectWrapper><CaptainLogout/></CaptainProtectWrapper>} />
    </Routes>
  </div>
  </>
  )
}

export default App;