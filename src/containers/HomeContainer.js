import React from 'react';
import LogIn from '../components/LogIn'
import PetContainer from './PetContainer'
import UserContainer from "./UserContainer";

class Home extends React.Component {

    state = {
        loggedInUserId: null,
        token: null,
        profileOn: false
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
        profileOn: !this.state.profileOn
      })
    }



    render() {
        console.log(this.state.token)
        return(
            <div className="home">
                
                {this.state.token ?
                <>
                <button onClick={this.logOut}>Log Out</button>
                <button onClick={this.handleOnClick}> { !this.state.profileOn ? "Profile" : "Go back" } </button>
                { this.state.profileOn ? 
                <UserContainer userId={this.state.loggedInUserId}
                               token={this.state.token}
                               handleOnClick={this.handleOnClick}
                               logOut={this.logOut}/> :
                <PetContainer token={this.state.token} loggedInUserId={this.state.loggedInUserId}/>
                }
                </>
                :
                <LogIn setToken={this.setToken} renderProps={this.props.renderProps}/>
                }

            </div>

        )
    }
}

export default Home;