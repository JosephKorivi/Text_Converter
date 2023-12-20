// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Welcome from './components/Welcome';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');  // Whether Dark mode is enabled or not 


  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.title = "JKUtilizations - DarkMode";
      // setInterval(() => {
      //   document.title = "JK is Amazing now";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install JK now";
      // }, 1000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "JKUtilizations - LightMode";
    }
  } 

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
        {/* <Welcome name="joseph" />
        <Welcome name="korivi" /> */}
      
        {/* <Navbar title="JK Utilizations" mode={mode} toggleMode={toggleMode} /> */}
        <Router>
          <Switch>
            <Navbar title="JosephKorivi" mode={mode} toggleMode={toggleMode} />
            <Route path="/about">
              <About />
            </Route>
        </Switch>
        <div className='container my-3'>
          <TextForm  heading="Enter your text to analyze below" mode={mode}/>
        </div>
        </Router>
    </>
  );
}

export default App;
