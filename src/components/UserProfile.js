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
        src="https://cdn0.iconfinder.com/data/icons/finance-1-8/151/25-512.png"
         alt={this.props.user.name}/> 
      
    } else  if (this.props.user.gender === "Prefered not to say"){
     return  <img className="profile-img" 
        src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
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

    const { name, location, username, gender} = this.props.user
    return (<div className="profile-div">
         {this.renderGenderPhoto()}
         <div className="profile-info">
          <h2>
            {name}
          </h2>

          <p> 
            <b className="bold">Location:</b> 
            {location}
          </p>
        
          <p> 
            <b className="bold">Username:</b> 
            {username}
          </p>
    
          <p> 
            <b className="bold">Gender:</b> 
            {gender}
          </p>

          <button onClick={this.handleEditButton} className="profile-edit-button">
            { this.state.isEditFormOn?
              "Profile" : "Edit me"
            }

         </button>
        
         <button className="tooltip" onClick={this.handleDelete} >
            <span className="delete-button">Delete your account</span> 
          
            <span className="tooltiptext">Are your sure that you wanna leave puppies alone? 🐶</span>
          </button>
          </div>
          
      </div>)
  }
 
 render() {


  if (localStorage.loggedInUserId){
    return(
      <div className="profile-item">
       { this.state.isEditFormOn ? 
          this.editForm()
           :
          this.profile()
       }
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