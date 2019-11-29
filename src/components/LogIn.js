import React from 'react';
import { withRouter } from 'react-router-dom';
import Profile from './UserProfile'
import UserProfile from './UserProfile';


class LogIn extends React.Component {

    state = {
        username: '',
        password: '',
        name: '',
        location: '',
        gender: '',
        errors: []
    }

    

    logInForm = ()=>{
        return (<form onChange={this.handleOnChange} className="login-form">
            <label htmlFor="username" className="name-input">User Name:</label>
            <input type="text" id='username'name="username" placeholder="write your username"/>

            <label htmlFor="password" className="password">Password:</label>
            <input type="password" id='password' name="password" placeholder="write your password"/>

            <input type="submit" onClick={this.logInSubmitted}/>
       </form>)
    }

    signUpForm = ()=>{
       return (<form onChange={this.handleOnChange} className="sign-up-form">
            <label htmlFor="name" className="name-input">Name:</label>
            <input type="text" id='name' name="name" placeholder="write your name"/>

            <label htmlFor="location" className="location"> Location:</label>
            <input type="text" id='location' name="location" placeholder="write your location"/>

            <label htmlFor="gender" className="select">Gender:</label>
            <select name="gender" className="select" >
                <option  className="option" value="default">Your prefered gender</option>
                <option className="option" value="Female">
                    Female
                </option>
                <option className="option" value="Male">
                    Male
                </option>
                <option className="option" value="Prefered not to say">
                    Prefered not to say
                </option>
            </select>

            <label htmlFor="username" className="username">User Name:</label>
            <input type="text" id='username' name="username" className="username-input"placeholder="write your username"/>

            <label htmlFor="password" className="password">Password:</label>
            <input type="password" id='password' className="password-input" name="password" placeholder="write your password"/>

            <input type="submit" onClick={this.signUpSubmitted} />

        </form> )
    }

    handleOnChange = (event) => {
        // console.log(event.target.name, event.target.value)
        this.setState({
        [event.target.name]: event.target.value
        })
    }

    logInSubmitted = (event) => {
        event.preventDefault()
        // console.log("derya is life")
        fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
           },
           body: JSON.stringify(
               {
                   username: this.state.username,
                   password: this.state.password
               }
           )
       })
       .then(res => res.json())
       .then(data => {
           if (data.errors) {
               this.setState({
                   errors: data.errors
               })
           }else{
               this.props.setToken(data.token, data.user_id)
              
           }
       })
       this.setState({
           username: '',
           password: ''
       })
    //    this.props.history.push('/')
    }

    signUpSubmitted = (event) => {
        event.preventDefault()
        // console.log("derya is life")
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
           },
           body: JSON.stringify(
               { 
                   name: this.state.name,
                   location: this.state.location,
                   username: this.state.username,
                   password: this.state.password,
                   gender: this.state.gender
               }
           )
       })
       .then(res => res.json())
       .then(data => {
           if (data.errors) {
            this.setState({
                errors: data.errors
            })
           }else{
            this.props.setToken(data.token, data.user_id)
        
           }
       })
       
    }
    

    render (){

        return(
            <div>
      { this.state.errors && this.state.errors.length > 0 ?
      
           <ul>
      {this.state.errors.map(error => <li>{error}</li>)}
          </ul> : null
    }
               
               
               {
                   this.props.renderProps.location.pathname === '/'  ? 
                   
                   this.logInForm()
                  : 
                   this.signUpForm()
               }  

               
            </div>
            
        )
    }
}

export default withRouter(LogIn);