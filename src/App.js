import './App.css';
import React from "react";
import Login from "./component/loginRegister/Login"
import Register from "./component/loginRegister/Register"
import ListUser from './component/loginRegister/ListUser'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <> 
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />}/> 
        <Route path="/ListUser" element={<ListUser />}/>        
      </Routes>
    </Router>

    </>
  );
}

export default App;


