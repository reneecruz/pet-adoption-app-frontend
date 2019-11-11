import React, { Component } from 'react'
import UserProfile from '../components/UserProfile'
import AdoptionContainer from './AdoptionContainer'

class UserContainer  extends Component {

 render() {
  return(
   <div className='user-container'>
       <UserProfile userId={this.props.userId}
                    token={this.props.token}/>
       {/* <AdoptionContainer/> */}
   </div>
    )
   }
 }


export default UserContainer