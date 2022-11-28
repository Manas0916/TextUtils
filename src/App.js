import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', "success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#5A5A5A';
      showAlert('Dark mode has been enabled', "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" element = {<About/>}/> */}
            {/* <Route path="/" element={}/>
          </Routes> */}
          <TextForm showAlert={showAlert} heading = "Enter Your text below to analyze" mode = {mode}/>
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
