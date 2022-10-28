import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './Components/Login';
import AddFriend from './Components/AddFriend';
import FriendsList from './Components/FriendsList';


function App() {
  return (

      <div className="App">

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
