import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>} ></Route>
        <Route path = "/dashboard" element = {<Dashboard/>} ></Route>
        <Route path = "/onboarding" element = {<Onboarding/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
