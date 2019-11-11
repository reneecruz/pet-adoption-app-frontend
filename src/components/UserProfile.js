import React, { Component } from 'react'


class UserProfile extends Component {
 state = {
   user: {},
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
        user: userData,
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

  handleOnChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    console.log("submit")
    fetch(`http://localhost:3000/users/${this.props.userId}`, {
      method: 'PATCH',
      headers: {
        "Authorization": this.props.token,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, 
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        location: this.state.location
      })

    })
    .then(res => res.json())
    .then(
      this.setState({
        editButton: false
      })

    )
  }

  handleDelete = (event, user)=>{
    console.log(user.id)
    fetch(`http://localhost:3000/users/${user.id}`,{
      method: "DELETE"
    })
    .then(
      this.props.handleOnClick(),
      this.props.logOut()
    )
  }


 render() {
  
  //  console.log(this.props.userId, this.props.token)
  return(
   <div className="profile-item">
    { !this.state.editButton ? 
    <>
    <div className="profile-div">
     <img className="profile-img" 
     src="https://banner2.cleanpng.com/20180521/ocp/kisspng-computer-icons-user-profile-avatar-french-people-5b0365e4f1ce65.9760504415269493489905.jpg"
     alt={this.state.name}/>
     </div>
     <h2 key={this.state.user.id}>
       {this.state.name}
     </h2>
     <p> 
       <b>Location:</b> 
       {this.state.location}
    </p>
    
    <p> 
       <b>Username:</b> 
       {this.state.username}
    </p>
    </> :

    <form onChange={this.handleOnChange}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={this.state.name}/>

      <label htmlFor="username" >Username:</label>
      <input type="text" id="username" name="username" value={this.state.username}/>

      <label htmlFor="location">Location:</label>
      <input type="text" id="location" name="location" value={this.state.location}/>

      <input type="submit" onClick={(event) => this.handleOnSubmit(event)}/>
    </form>
   }

    <button onClick={this.handleOnClick}>
      { this.state.editButton && this.props.userId ?
       "Profile" : "Edit me"
      }
    </button>
    <button onClick={(event) => this.handleDelete(event, this.state.user)}>
      Delete your account
    </button>

   </div>
    )
   }
 }

export default UserProfile