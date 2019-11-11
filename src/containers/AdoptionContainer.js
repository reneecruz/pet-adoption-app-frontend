import React, { Component } from 'react'
import  AdoptionList from '../components/AdoptionList'

class AdoptionContainer extends Component {

 render() {
  return(
   <div  className="adoption-container">
       Adoption Container
       <AdoptionList/>
   </div>
    )
   }
 }

export default AdoptionContainer 