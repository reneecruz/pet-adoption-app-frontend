import React, { Component } from 'react'
import PetList from '../components/PetList'
import PetViewer from '../components/PetViewer'

class PetContainer extends Component {

 state = {
   pets: [],
   pet: {},
   isPetViewOn: false,
   sortValue: '',
   inputValue: '',
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

 petFilterOnChange = (event) => {
   console.log("hi from onChange", event.target.value)
   this.setState({
     inputValue: event.target.value
   })

 }

 handleSortPets = (event) => {
  //  console.log("sort button", this.state.sortValue)
   this.setState({
     sortValue: event.target.value
   })
 }

 sortPets = (pets) => {
   if(this.state.sortValue === "Name") {
     return [...pets].sort((a,b) => {
       if(a.name > b.name) {
         return 1
       }else if (a.name < b.name) {
         return -1
       }else {
         return 0
       }
     })
   }
   else if(this.state.sortValue === "Breed") {
    return [...pets].sort((a,b) => {
      if(a.breed > b.breed) {
        return 1
      }else if (a.breed < b.breed) {
        return -1
      }else {
        return 0
      }
    })
  }
  else {
    return pets
  }

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

  const filteredPets = 
    this.state.pets.filter(pet => {
      return pet.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
    }) 
  

  return(
   <div className="pet-container">
  
      <label>Sort Pets</label>
      
      <select name="sortValue" onChange={this.handleSortPets}>
        <option value="All">All</option>
        <option value="Name">Name</option>
        <option value="Breed">Breed</option>
      </select>
 
       {
         this.state.isPetViewOn ? 
         <PetViewer  pet={this.state.pet} 
                     handlePetGoBack={this.handlePetGoBack} 
                     adoptDoggy={this.adoptDoggy}/> 
                     :
         <PetList pets={this.sortPets(filteredPets)} 
                  handlePetView={this.handlePetView}
                  petFilterOnChange={this.petFilterOnChange}
                  inputValue={this.state.inputValue} /> 
       }  
   </div>
    )
   }
 }

export default PetContainer