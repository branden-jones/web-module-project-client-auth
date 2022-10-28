import React from 'react';
import './App.css';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

import Login from './Components/Login';
import AddFriend from './Components/AddFriend';
import FriendsList from './Components/FriendsList';


function App() {
  return (

      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className='links' to='login'>Login</Link>
          <Link className='links' to='friends'>Friends List</Link>
          <Link className='links' to='friends/add'>Add Friends</Link>
          <Link className='links' to='/'>Logout</Link>
        </header>

        <Routes>

          <Route path='/friends/add' element={<AddFriend />} />

          <Route path='/friends' element={<FriendsList />} />

          <Route path='/login' render={<Navigate to='/' />} element={<Login />}  />

          <Route path='/' element={<Login />} />

        </Routes>

      </div>
  )
}

export default App;
