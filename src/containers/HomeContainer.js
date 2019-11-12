import React from 'react';
import LogIn from '../components/LogIn'
import PetContainer from './PetContainer'
import UserContainer from "./UserContainer";

class Home extends React.Component {

    state = {
        loggedInUserId: null,
        token: null,
        profileButtonClicked: false
        
    }

    componentDidMount() {
        if(localStorage.token){
            this.setState({
                loggedInUserId: localStorage.loggedInUserId,
                token: localStorage.token
            })
        }
    }

    setToken = (token, loggedInUserId) => {
        localStorage.token = token 
        localStorage.loggedInUserId = loggedInUserId 
        this.setState({
            token: token,
            loggedInUserId: loggedInUserId
        })
    } 
    
    logOut = ()=>{
        localStorage.clear()
        this.setState({
            token: null, 
            loggedInUserId: null
        })
    }
    
    handleOnClick = ()=>{
      this.setState({
        profileButtonClicked: !this.state.profileButtonClicked
      })
    }

    render() {
        // console.log(this.state.token)
       
         return(
            
            <div className="home">
                
                {/* First ternary is for to check if we have a token
                    If we have it, render logout, profile/go back buttons and Usercontainer, PetContainer
                    else render LogIn
                */}
                {this.state.token ?
                    <>
                      <button onClick={this.logOut}>Log Out</button>
                      <button onClick={this.handleOnClick}> { 
                          /* Second ternary is for to check the profileOn if it is on or off*/
                        !this.state.profileButtonClicked ? "Profile" : "Go back" } </button>
                        {  /* Third ternary is checking if profileOn is true, if that so, 
                             UserContainer will be rendered, else PetContainer*/
                            ! this.state.profileButtonClicked ? 
                             <PetContainer /> :
                             <UserContainer handleOnClick={this.handleOnClick}
                                       logOut={this.logOut}/>
                        
                        }
                    </>
                   :
                <LogIn setToken={this.setToken} 
                       renderProps={this.props.renderProps}/>
                }

            </div>

        )
    }
}

export default Home;