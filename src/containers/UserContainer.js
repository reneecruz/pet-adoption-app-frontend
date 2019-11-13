import React, { Component } from 'react'
import UserProfile from '../components/UserProfile'
import AdoptionContainer from './AdoptionContainer'

class UserContainer  extends Component {

state = {
  user: {}
}

fetchUser = ()=>{
    const id = localStorage.loggedInUserId
    const token = localStorage.token
    fetch(`http://localhost:3000/users/${id}`, {
      headers: {
        "Authorization": token
      }
    })
    .then(res=>res.json())
    .then(userData => {
      this.setState({
        user: userData
      })
    })
}

componentDidMount(){
  this.fetchUser()
}

 render() {

  return(
   <div className='user-container'>
     <div className="profile-container">
     <UserProfile user={this.state.user}
                    logOut={this.props.logOut}
                    fetchUser={this.fetchUser}/>
     </div>
      <div className="adoption-container">
      <AdoptionContainer 
      adoptions={this.state.user.adoptions}/>
      
      </div>
   </div>
    )
   }
 }


export default UserContainer