import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

const Login = () => {
  return (<h2>Login</h2>)
}

const FriendsList = () => {
  return (<h2>FriendList</h2>)
}

const AddFriend = () => {
  return (<h2>AddFriend</h2>)
}


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
