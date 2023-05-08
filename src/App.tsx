import React, {createElement as e} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/content/Intro/Intro';
import Counter from './components/content/Counter/Counter';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
          <Header />
          <div className='app-container'>
          <Navbar />
        <Routes>
          <Route path='/counter' element={<Counter />} />
          <Route path='/intro' element={<Intro />} />
          <Route path='/' element={<Navigate to="/intro" />}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}


export default App;
