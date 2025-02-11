//import { useState } from 'react'
import './App.css';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Dashboard from './Dashboard';

import { menuMain } from './ServiceData';

function App() {
  
  let menuList = menuMain;

  return (
    <>
      <BrowserRouter>
        <Header menuMain={menuList} />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>     
    </>
  )
}

export default App


{/*  */}
