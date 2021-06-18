import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom" 



const App = () => {
  console.log("clicked")
  return (
    <div>
      <Router>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;