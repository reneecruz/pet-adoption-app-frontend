import React from 'react';

class SignUp extends React.Component {

    render (){
        return(
            <div>
              <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name="name" placeholder="write your name"/>

                    <label htmlFor="location">Location:</label>
                    <input type="text" id='location' name="location" placeholder="write your location"/>

                    <label htmlFor="username">User Name:</label>
                    <input type="text" id='username' name="username" placeholder="write your username"/>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' name="password" placeholder="write your password"/>

                    <input type="submit" />

              </form>
            
            </div>
            
        )
    }
}

export default SignUp;