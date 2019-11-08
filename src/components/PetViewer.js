import React, { Component } from 'react'
import PetItem from './PetItem'

class PetViewer extends Component {
  

 render() {
   console.log(this.props.pet)
  return(
   <div>
       pet PetViewer
    <PetItem pet={this.props.pet} handleClick={null}/>
   </div>
    )
   }
 }

export default PetViewer