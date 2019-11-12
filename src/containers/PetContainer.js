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
     onOff: !this.state.onOff
   })
 }

// handleBackButton = () => {
//   console.log("back button")
//   this.setState({
    
//   })
// }

adoptDoggy = (petItem) => {
  // console.log("bring doggy", petItem)
  this.setState({
  pet: petItem,
  adopted: true
   
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
  .then(adoptionData => {
    // console.log(adoptionData)
    const updatedPets = this.state.pets.map(pet => {
      return pet.id === adoptionData.id ? adoptionData : pet
    })
    this.setState({
      pets: updatedPets,
      pet: adoptionData
    })
  })

}


 handleRemove = ()=>{
  this.setState({
    pet: {},
    onOff: false
  })
 }
  
 
 render() {
  //  console.log(this.props.token)
  // console.log(this.state.onOff)
  // console.log(this.state.pets)
  // console.log(this.state.pet)
  return(
   <div className="pet-container">
       
       {
         !this.state.onOff ? 
         <PetList pets={this.state.pets} handleClick={this.handleClick} /> :

         <PetViewer  pet={this.state.pet} handleClick={this.handleRemove} adoptDoggy={this.adoptDoggy}
         adopted={this.props.adopted}/>
       }
       
       
   </div>
    )
   }
 }

export default PetContainer