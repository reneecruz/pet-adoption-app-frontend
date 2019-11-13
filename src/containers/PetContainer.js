import React, { Component } from 'react'
import PetList from '../components/PetList'
import PetViewer from '../components/PetViewer'

class PetContainer extends Component {
 state = {
   pets: [],
   pet: {},
   isPetViewOn: false
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

 handlePetView= (petItem) => {
  //  console.log("click", petItem)
   this.setState({
     pet: petItem,
     isPetViewOn: !this.state.isPetViewOn
   })
 }

 handlePetGoBack = ()=>{
  this.setState({
    pet: {},
    isPetViewOn: false
  })
 }

adoptDoggy = (petItem) => {
  // console.log("bring doggy", petItem)
  this.setState({
  pet: petItem
   
  })
  fetch("http://localhost:3000/adoptions", {
  method: 'POST',
  headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": localStorage.token
  },
  body: JSON.stringify({
      user_id: localStorage.loggedInUserId,
      pet_id: petItem.id
  })
  })
  .then(res => res.json())
  .then(adoptedDoggy => {
    // console.log(adoptedDoggy)
    const updatedPets = this.state.pets.map(pet => {
      return pet.id === adoptedDoggy.id ? adoptedDoggy : pet
    })
    this.setState({
      pets: updatedPets,
      pet: adoptedDoggy
    })
  })

}


  
 
 render() {
  // console.log(this.state.isPetViewOn)
  // console.log(this.state.pets)
  // console.log(this.state.pet)
  
  return(
   <div className="pet-container">
       
       {
         this.state.isPetViewOn ? 
         <PetViewer  pet={this.state.pet} 
                     handlePetGoBack={this.handlePetGoBack} 
                     adoptDoggy={this.adoptDoggy}/> 
                     :
         <PetList pets={this.state.pets} 
                  handlePetView={this.handlePetView} /> 
       }  
   </div>
    )
   }
 }

export default PetContainer