import React, { Component } from 'react'
import PetList from '../components/PetList'
import PetViewer from '../components/PetViewer'

class PetContainer extends Component {
 state = {
   pets: [],
   pet: {}
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

 handleClick = (petItem) => {
   console.log("click", petItem)
   this.setState({
     pet: petItem
   })
 }
  
 

 render() {
 
  return(
   <div className="pet-container">
       Pet Container
       <PetList pets={this.state.pets} handleClick={this.handleClick} />
       <PetViewer pet={this.state.pet}/>
   </div>
    )
   }
 }

export default PetContainer