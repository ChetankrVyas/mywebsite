// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const removebodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-dark')
  }
  const toggleMode = (cls) => {
    removebodyClasses()
    document.body.classList.add('bg-'+cls)
    setMode(cls)
    // if (mode === 'light'){
    //   setMode('dark')
    // //   document.body.style.backgroundColor = '#221c2b'
    //   showAlert("Dark mode enabled", "success")
    // }
    // else {
    //   setMode('light')
    //   // document.body.style.backgroundColor = 'white'
    //   showAlert("Light mode enabled", "success")
    // }
  }
  return (
    <>
      {/* <Navbar/> */}
      <Router>
        <Navbar title="Chetanment" mode={mode} toggleMode={toggleMode} aboutText="About us" />
        <Alert alert={alert} showAlert={showAlert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Textform showAlert={showAlert} heading='Try TextUtils' mode={mode} toggleMode={toggleMode} />}>
            {/* <Textform showAlert={showAlert} heading='Enter the text to analyze' mode={mode} toggleMode={toggleMode} /> */}
            </Route>
            <Route path="/about" element={<About mode={mode}/>}>
            </Route>
          </Routes>
          {/* <About /> */}
      </div>
      </Router>
    </>

  )
}

export default App;