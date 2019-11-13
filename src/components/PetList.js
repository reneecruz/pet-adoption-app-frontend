import React, { Component } from 'react'
import PetItem from './PetItem'

class PetList extends Component {
  
 render() {
  //  console.log(this.props.pets)
  return(
   <div className="dog-list">
       {
         this.props.pets.map(pet => {
           return <PetItem pet={pet} key={pet.id} handlePetView={this.props.handlePetView}/>
         })
       }
       
   </div>
    )
   }
 }

export default PetList