import React from 'react'
import { NavLink  } from 'react-router-dom';

const NavBar = () => {

const renderButtons = () => {
    if (localStorage.token) {
     return <NavLink className="nav-link" to='/'>Home</NavLink>   
    }else {
      return (
        <>
        <NavLink className="nav-link" to='/'>Home</NavLink>
        <NavLink className="nav-link" to='/signup'>Sign Up</NavLink>
        </>
      )
    }
  }
      return (
            
        <div className="App">
          <header className="header"> 
              <h1>
                DoggoDoption
              </h1>
              <div className="clear"></div>
              <div className="nav-bar">
                  {renderButtons()}  
               </div>
          </header>
        </div>
      )
  }

export default NavBar