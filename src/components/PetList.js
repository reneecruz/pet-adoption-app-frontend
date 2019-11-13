import React, { Component } from 'react'
import PetItem from './PetItem'

class PetList extends Component {
  
 render() {
  //  console.log(this.props.pets)
  return(
  <>
   <label>Find Pet By Name</label>
   <input value={this.props.inputValue} onChange={this.props.petFilterOnChange}></input>

   <div className="dog-list">
       {
         this.props.pets.map(pet => {
           return <PetItem pet={pet} key={pet.id} handlePetView={this.props.handlePetView}/>
         })
       }
       
   </div>
  </>
    )
   }
 }

export default PetList