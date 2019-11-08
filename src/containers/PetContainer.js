import React, { Component } from 'react'
import PetList from '../components/PetList'
import PetViewer from '../components/PetViewer'

class PetContainer extends Component {
 state = {
   pets: [],
   pet: {},
   onOff: false
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
  //  console.log("click", petItem)
   this.setState({
     pet: petItem,
     onOff: true
   })
 }

 handleRemove = ()=>{
  this.setState({
    pet: {},
    onOff: false
  })
 }
  
 

 render() {
  // console.log(this.state.onOff)
  return(
   <div className="pet-container">
       Pet Container 
       {
         !this.state.onOff ? 
         <PetList pets={this.state.pets} handleClick={this.handleClick} /> :

         <PetViewer  pet={this.state.pet} handleClick={this.handleRemove }/>
       }
       
       
   </div>
    )
   }
 }

export default PetContainer