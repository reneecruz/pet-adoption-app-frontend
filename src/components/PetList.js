import React, { Component } from 'react'
import PetItem from './PetItem'

class PetList extends Component {
 state = {}
 render() {
  return(
   <div>
       Pet List
       <PetItem/>
   </div>
    )
   }
 }

export default PetList