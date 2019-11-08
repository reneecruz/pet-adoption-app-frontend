import React, { Component } from 'react'
import PetList from '../components/PetList'

class PetContainer extends Component {
 state = {}
 render() {
  return(
   <div className="pet-container">
       Pet Container
       <PetList/>
   </div>
    )
   }
 }

export default PetContainer