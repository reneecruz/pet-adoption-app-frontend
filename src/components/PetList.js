import React, { Component } from 'react'
import PetItem from './PetItem'

class PetList extends Component {
  
 render() {
  //  console.log(this.props.pets)
  return(
   <div>
      
       {
         this.props.pets.map(pet => {
           return <PetItem pet={pet} key={pet.id}/>
         })
       }
       
   </div>
    )
   }
 }

export default PetList