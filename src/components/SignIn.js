import React from 'react';

class SignIn extends React.Component {

    render (){
        return(
            <div>
                <form onChange={this.props.handleOnChange} className="login-form">
                    <label htmlFor="username">User Name:</label>
                    <input type="text" id='username'name="username" placeholder="write your username"/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' name="password" placeholder="write your password"/>

                    <input type="submit" />
                </form>
            </div>
            
        )
    }
}

export default SignIn;