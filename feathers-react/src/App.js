import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Switch>
      <Route component={LoginPage} path={'/'} exact/>
      <Route component={HomePage} path={'/home'}/>
    </Switch>
  );
}

export default App;
