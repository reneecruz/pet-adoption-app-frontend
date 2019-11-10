import React from 'react';
import LogIn from '../components/LogIn'
import PetContainer from './PetContainer'


const userAPI = 'http://localhost:3000/users/'
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



    render() {
        console.log(this.props.renderProps)
        return(
            <div className="home">
                {this.state.token ? 
                <PetContainer token={this.state.token} loggedInUserId={this.state.loggedInUserId}/>
                :
                <LogIn setToken={this.setToken} renderProps={this.props.renderProps}/>
                }

            </div>

        )
    }
}

export default Home;