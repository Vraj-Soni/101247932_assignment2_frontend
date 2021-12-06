import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import ViewEmployee from './pages/ViewEmployee';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddEmployee />} />
          <Route path='/edit/:id' element={<EditEmployee />} />
          <Route path='/view/:id' element={<ViewEmployee />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
