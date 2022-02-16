import React from 'react';
import Signup from './Signup';
import './App.css';
import Login from './Login';
import { Account } from './Account';
import Status from './Status';

function App() {
  return (
    <Account>
      <Status />
      <Signup />
      <Login />
    </Account>
  );
}

export default App;
