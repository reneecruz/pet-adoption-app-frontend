import React, { Component } from 'react'
import PetCard from './PetCard'

class PetViewer extends Component {
  

 render() {
   console.log(this.props.pet)
  return(
   <div>
     <button>Back</button>
    <PetCard pet={this.props.pet} handleClick={this.props.handleClick}/>
   </div>
    )
   }
 }

export default PetViewer