import React from "react";
import Routes from './__route/'
import './main.css'
import Navbar from "./component/Navbar/navbar";

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes/>
    </React.Fragment>
  );
};

export default App;
