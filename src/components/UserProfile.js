import React, { Component } from 'react'


class UserProfile extends Component {

 state = {
    isEditFormOn: false,
    name: "",
    username: "",
    location: "", 
    gender: ""
    
 }
 

  handleEditButton = ()=>{
    this.setState({
      isEditFormOn: !this.state.isEditFormOn,
      name: this.props.user.name,
      username: this.props.user.username,
      location: this.props.user.location, 
      gender: this.props.user.gender
      
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
    // console.log("submit")
    fetch(`http://localhost:3000/users/${this.props.user.id}`, {
      method: 'PATCH',
      headers: {
        "Authorization": localStorage.token,
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
    .then(() => {
      this.setState({
           isEditFormOn: false
        }, this.props.fetchUser())
      }
    )
      
  }

  renderGenderPhoto = ()=>{
    if (this.props.user.gender === "Female"){
      return  <img className="profile-img" 
      src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
       alt={this.props.user.name}/> 
    } else if( this.props.user.gender === "Male"){
      
       return <img className="profile-img" 
        src="https://i7.pngguru.com/preview/136/22/549/user-profile-computer-icons-girl-customer-avatar-thumbnail.jpg"
         alt={this.props.user.name}/> 
      
    } else  if (this.props.user.gender === "Prefered not to say"){
     return  <img className="profile-img" 
        src="https://i-love-png.com/images/user_png_1449302.png"
         alt={this.props.user.name}/> 
    } else {
      return  <img className="profile-img" 
      src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Question_mark_alternate.svg"
       alt={this.props.user.name}/>
    }
  }

  handleDelete = ()=>{
    fetch(`http://localhost:3000/users/${this.props.user.id}`,{
      method: "DELETE"
    })
    .then(
      this.props.logOut()
    )
  }
  
  editForm =  ()=>{
   return (<form onChange={this.handleOnChange}>
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
    </form>)
  }

  profile = ()=>{
    return (<div className="profile-div">
         {this.renderGenderPhoto()}
         <h2>
           {this.props.user.name}
         </h2>

         <p> 
           <b>Location:</b> 
           {this.props.user.location}
         </p>
      
         <p> 
           <b>Username:</b> 
           {this.props.user.username}
         </p>
  
         <p> 
           <b>Gender:</b> 
           {this.props.user.gender}
         </p>
      </div>)
  }
 
 render() {
  // console.log(this.renderGenderPhoto())
  // console.log(this.props.user)

  if (this.props.user.id){
    return(
      <div className="profile-item">
       { this.state.isEditFormOn ? 
          this.editForm()
           :
          this.profile()
       }
  
         <button onClick={this.handleEditButton}>
            { this.state.isEditFormOn?
              "Profile" : "Edit me"
            }

         </button>

         <button className="tooltip" onClick={this.handleDelete}>
            Delete your account
            <span className="tooltiptext">Are your sure that you wanna leave puppies alone? 🐶</span>
          </button>

     </div>
      )
     } else
       return (
         <> 
         </>
     )
  }
 }

export default UserProfile