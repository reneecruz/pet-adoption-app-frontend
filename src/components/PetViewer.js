import React, { Component } from 'react'
import PetCard from './PetCard'

class PetViewer extends Component {
  

 render() {
   console.log(this.props.pet)
  return(
   <div>
    <button onClick={this.props.handlePetGoBack}>Back</button>
    <PetCard pet={this.props.pet} 
             handlePetGoBack={this.props.handlePetGoBack} 
             adoptDoggy={this.props.adoptDoggy}/>
   </div>
    )
   }
 }

export default PetViewer