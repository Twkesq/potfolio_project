import React from "react";
import Header from "./models/home_page/Header";
import './App.css';
import NavBar from "./models/navbar/NavBar";
function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <NavBar/>
            <Header/>
        </div>
    </div>
  );
}

export default App;
