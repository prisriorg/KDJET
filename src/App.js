import './App.css';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import { useDetectAdBlock } from "adblock-detect-react";
import AdBlock from "./pages/AdBlock";
import Login from "./authPages/Login";
import Register from "./authPages/Register";
import ForgetPassword from "./authPages/ForgetPassword";
import Home from "./pages/Home";
import UserDashboard from './pages/UserDashboard/UserDashboard';
import UserStats from './pages/UserStats/UserStats';
function App() {
    const adBlockDetected = useDetectAdBlock();
  return (
      <BrowserRouter>
        {/* {adBlockDetected?<AdBlock/>: */}
            <Routes >
              <Route path="/" element={<MainLayout />}>
                <Route path="/stats" element={<UserStats />} />
                <Route path="/dashboard" element={<UserDashboard />} />
              </Route>
              <Route index element={<Home/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
            </Routes>
            {/* } */}
      </BrowserRouter>
  );
}

export default App;
