import React, { Component } from 'react'
import AdoptionItem from './AdoptionItem'

class AdoptionList extends Component {
 
 render() {
   console.log(this.props.adoption)
  return(
   <div>
      <h3>Pet Name: {this.props.adoption.pet.name}</h3>
   </div>
    )
   }
 }

export default AdoptionList