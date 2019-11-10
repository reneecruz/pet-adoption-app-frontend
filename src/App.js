import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

function App() {


  return (
    <div className="App">

      <header className="header"> 
        <h1>
          DoggoDoption
        </h1>
        <NavLink className="nav-link" to='/'>Home</NavLink>
        
        <NavLink className="nav-link" to='/signup'>Sign Up</NavLink>
        <NavLink className="nav-link" to='/logout'>Log Out</NavLink>
      
      

      </header>
    
    <Switch>
      <Route exact path={'/'} render={renderProps => <HomeContainer renderProps={renderProps}/>} />
      <Route exact path ={"/login"} render={renderProps => <HomeContainer renderProps={renderProps}/>}/>
      <Route exact path ={"/signup"} render={renderProps => <HomeContainer renderProps={renderProps}/>}/>
    </Switch>
    </div>
  );
}

export default App;
