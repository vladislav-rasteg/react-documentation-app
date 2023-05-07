import React, {createElement as e} from 'react';
import './App.css';
import Intro from './components/content/Intro/Intro';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
          <Header />
          <div className='app-container'>
          <Navbar />
        <Routes>
          <Route path='/' element={<Intro />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}


export default App;
