import React, { Component } from 'react'
import { NavLink  } from 'react-router-dom';

class NavBar extends Component {

renderButtons = () => {
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

  render() {
      return (
            
        <div className="App">
    
          <header className="header"> 
            <h1>
              DoggoDoption
            </h1>
            {this.renderButtons()}    
          </header>
          </div>
      )
  }
}

export default NavBar