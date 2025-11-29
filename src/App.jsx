import React from 'react';
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes,Route,Link} from "react-router-dom";
import Home from './assets/pages/Home';
import Create from './assets/pages/Create';
import Edit from './assets/pages/Edit';
import View from './assets/pages/View';

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark navbar-dark bg-dark'>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={'/'} className='nav-link'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to={'/create'} className='nav-link'>Create</Link>
          </li>
          <li className='nav-item'>
            <Link to={'/about'} className='nav-link'>About</Link>
          </li>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/view/:id' element={<View />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
