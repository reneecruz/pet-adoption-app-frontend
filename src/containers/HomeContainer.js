import React from 'react';
import LogIn from '../components/LogIn'
import PetContainer from './PetContainer'

class Home extends React.Component {

    state = {
        loggedInUserId: null,
        token: null
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



    render() {
        console.log(this.state.token)
        return(
            <div className="home">
                
                {this.state.token ?
                <>
                <button onClick={this.logOut}>Log Out</button>
                <PetContainer token={this.state.token} loggedInUserId={this.state.loggedInUserId}/>
                </>
                :
                <LogIn setToken={this.setToken} renderProps={this.props.renderProps}/>
                }

            </div>

        )
    }
}

export default Home;