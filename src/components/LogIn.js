import React from 'react';


class LogIn extends React.Component {

    state = {
        logIn: false,
        username: '',
        password: '',
        name: '',
        location: '',
        errors: []
    }

    handleOnChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({
        [event.target.name]: event.target.value
        })
    }

    logInSubmitted = (event) => {
        event.preventDefault()
        console.log("derya is life")
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
    }
       // .then(console.log)

    signUpSubmitted = (event) => {
        event.preventDefault()
        console.log("derya is life")
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
                   password: this.state.password
               }
           )
       })
       .then(res => res.json())
       .then(data => {
           console.log(data)
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
        // console.log(this.props.renderProps)
        // console.log(this.props.renderProps.location.pathname === '/login')
        return(
            <div>

                <ul>
                    {this.state.errors.map(error => <li>{error}</li>)}
                </ul>
               
               {
                   this.props.renderProps.location.pathname === '/' && !this.state.login ?
                   <form onChange={this.handleOnChange} className="login-form">
                    <label htmlFor="username">User Name:</label>
                    <input type="text" id='username'name="username" placeholder="write your username"/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' name="password" placeholder="write your password"/>

                    <input type="submit" onClick={this.logInSubmitted}/>
                </form>
                        : 
                   <form onChange={this.handleOnChange}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name="name" placeholder="write your name"/>

                    <label htmlFor="location">Location:</label>
                    <input type="text" id='location' name="location" placeholder="write your location"/>

                    <label htmlFor="username">User Name:</label>
                    <input type="text" id='username' name="username" placeholder="write your username"/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' name="password" placeholder="write your password"/>

                    <input type="submit" onClick={this.signUpSubmitted} />

              </form> 
             }
            </div>
            
        )
    }
}

export default LogIn;