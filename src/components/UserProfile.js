import React, { Component } from 'react'


class UserProfile extends Component {
 state = {
   user: {},
   name: '',
   username: '',
   location: '', 
   gender: '',
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
        gender: userData.gender,
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
        location: this.state.location,
        gender: this.state.gender
      })

    })
    .then(res => res.json())
    .then(
      this.setState({
        editButton: false
      })

    )
  }

  renderGenderPhoto = ()=>{
    if (this.state.gender === "Female"){
      return  <img className="profile-img" 
      src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
       alt={this.state.name}/> 
    } else if( this.state.gender === "Male"){
      
       return <img className="profile-img" 
        src="https://i7.pngguru.com/preview/136/22/549/user-profile-computer-icons-girl-customer-avatar-thumbnail.jpg"
         alt={this.state.name}/> 
      
    } else  if (this.state.gender === "Prefered not to say"){
     return  <img className="profile-img" 
        src="https://i-love-png.com/images/user_png_1449302.png"
         alt={this.state.name}/> 
    } else {
      return  <img className="profile-img" 
      src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Question_mark_alternate.svg"
       alt={this.state.name}/>
    }
  }

  handleDelete = (event, user)=>{
    console.log(user.id)
    // {"Are your sure you wanna leave puppies alone 🐶"}
    fetch(`http://localhost:3000/users/${user.id}`,{
      method: "DELETE"
    })
    .then(
      this.props.handleOnClick(),
      this.props.logOut()
    )
  }
   

 
 render() {
  // console.log(this.renderGenderPhoto())
  //  console.log(this.props.userId, this.props.token)
  return(
   <div className="profile-item">
    { !this.state.editButton ? 
    <>
    <div className="profile-div">
       {this.renderGenderPhoto()}
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

    <p> 
       <b>Gender:</b> 
       {this.state.gender}
    </p>
    </div>
    </> :

    <form onChange={this.handleOnChange}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={this.state.name}/>

      <label htmlFor="username" >Username:</label>
      <input type="text" id="username" name="username" value={this.state.username}/>

      <label htmlFor="location">Location:</label>
      <input type="text" id="location" name="location" value={this.state.location}/>

      <label htmlFor="gender">Gender:</label>
      <select name="gender">
        <option value="default">Your prefered gender</option>
        <option value="Female">
          Female
        </option>
        <option value="Male">
          Male
        </option>
        <option value="Prefered not to say">
          Prefered not to say
        </option>
      </select>
  

      <input type="submit" onClick={(event) => this.handleOnSubmit(event)}/>
    </form>
   }

    <button onClick={this.handleOnClick}>
      { this.state.editButton && this.props.userId ?
       "Profile" : "Edit me"
      }
    </button>
    
        <button className="tooltip"onClick={(event) => this.handleDelete(event, this.state.user)}>
         Delete your account
         <span className="tooltiptext">Are your sure that you wanna leave puppies alone? 🐶</span>
        </button>
    

   </div>
    )
   }
 }

export default UserProfile