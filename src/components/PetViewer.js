import React, { Component } from 'react'
import PetCard from './PetCard'

class PetViewer extends Component {
  

 render() {
   console.log(this.props.pet)
  return(
   <div>
     <button onClick={this.props.handleClick}>Back</button>
    <PetCard pet={this.props.pet} handleClick={this.props.handleClick} bringDoggy={this.props.bringDoggy}/>
   </div>
    )
   }
 }

export default PetViewer