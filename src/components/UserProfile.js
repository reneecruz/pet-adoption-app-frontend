import React, { Component } from 'react'


class UserProfile extends Component {
 state = {
   name: '',
   username: '',
   location: '', 
   editButton: false
 }
 

  componentDidMount(){
    const {userId, token} = this.props 
    fetch(`http://localhost:3000/users/${userId}`, {
      headers: {
        "Authorization": token
      }
    })
    .then(res=>res.json())
    .then(userData => {
      this.setState({
        name: userData.name,
        username: userData.username,
        location: userData.location
      })
    })
  }

  handleOnClick = ()=>{
    this.setState({
      editButton: !this.state.editButton
    })
  }


 render() {
  
   console.log(this.props.userId, this.props.token)
  return(
   <div className="profile-item">
    { !this.state.editButton ? 
    <>
    <div className="profile-div">
     <img className="profile-img" src="https://banner2.cleanpng.com/20180521/ocp/kisspng-computer-icons-user-profile-avatar-french-people-5b0365e4f1ce65.9760504415269493489905.jpg"/>
     </div>
     <h2>
       {this.state.name}
     </h2>
     <p> 
       <b>Location:</b> 
       {this.state.location}
    </p>
    
    <p> 
       <b>Username:</b> 
       {this.state.Username}
    </p>
    </> :

    <form></form>
   }

    <button onClick={this.handleOnClick}>
      { this.state.editButton ?
       "Profile" : "Edit me"
      }
    </button>


   </div>
    )
   }
 }

export default UserProfile