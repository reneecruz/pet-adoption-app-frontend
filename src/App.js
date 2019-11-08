import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';

function App() {


  return (
    <div className="App">

      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Log In</NavLink>

      </header>
    
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route path={'/login'} component={LogIn} />
    </Switch>
    </div>
  );
}

export default App;
