import React from 'react';
import LogIn from '../components/LogIn'
import PetContainer from './PetContainer'

class Home extends React.Component {
    render() {
        return(
            <div className="home">
                {/* <LogIn/> */}
                <PetContainer/>

            </div>

        )
    }
}

export default Home;