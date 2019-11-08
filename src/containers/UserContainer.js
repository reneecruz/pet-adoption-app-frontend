import React, { Component } from 'react'
import UserProfile from './components/UserProfile'
import AdoptionContainer from './AdoptionContainer'

class UserContainer  extends Component {
 state = {}
 render() {
  return(
   <div className='user-container'>
       User Container
       <UserProfile/>
       <AdoptionContainer/>
   </div>
    )
   }
 }


export default UserContainer