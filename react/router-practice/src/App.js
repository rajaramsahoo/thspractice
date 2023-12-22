import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home"
import About from './Components/About';
import { Route, Routes } from 'react-router-dom';
import UserName from './Components/UserName';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About />}/>
      <Route path="/:username" element={<UserName />}/>
    </Routes>
    </>
    
  );
}

export default App;
