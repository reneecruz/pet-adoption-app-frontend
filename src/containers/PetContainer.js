import React, { Component } from 'react'
import PetList from '../components/PetList'

class PetContainer extends Component {
 state = {
   pets: []
 }
 
 componentDidMount(){
   fetch('http://localhost:3000/pets')
   .then(res => res.json())
   .then(petsData => {
    //  console.log(petsData)
    this.setState({
      pets: petsData
    })
   })
 }
  
 

 render() {
  return(
   <div className="pet-container">
       Pet Container
       <PetList pets={this.state.pets}/>
   </div>
    )
   }
 }

export default PetContainer