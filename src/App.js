import React from 'react';
import './App.css';
import { Route, Switch, NavLink  } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';


function App() {

  // const renderButtons = () => {
  //   if (localStorage.token) {
  //    return <NavLink className="nav-link" to='/'>Home</NavLink>   
  //   }else {
  //     return (
  //       <>
  //       <NavLink className="nav-link" to='/'>Home</NavLink>
  //       <NavLink className="nav-link" to='/signup'>Sign Up</NavLink>
  //       </>
  //     )
  //   }
  // }

  return (
    
    
    <div className="App">
{/* 
  //     <header className="header"> 
  //       <h1>
  //         DoggoDoption
  //       </h1>
  //       {this.renderButtons()}    
  //     </header> */}
    <NavBar />
    <Switch>

      <Route exact path={'/'} render={renderProps => <HomeContainer renderProps={renderProps}/>} />
      {/* <Route exact path ={"/prpfile"} render={renderProps => <HomeContainer renderProps={renderProps}/>}/> */}
      <Route exact path ={"/signup"} render={renderProps => <HomeContainer renderProps={renderProps}/>}/>
      
    </Switch>
    </div>
  );
}

export default App;
