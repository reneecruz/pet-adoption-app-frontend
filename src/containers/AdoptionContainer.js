import React, { Component } from 'react'
import  AdoptionList from '../components/AdoptionList'

class AdoptionContainer extends Component {
    
 render() {
  //  console.log(this.props.adoptions)
  return(
   <div>
       <h2>My Adoptions:</h2>
       {this.props.adoptions && this.props.adoptions.length > 0 ? 
        this.props.adoptions.map(adoption => {
          return <AdoptionList adoption={adoption} key={adoption.id}/>
          })
      :
        <div>
          <p>You should definitely adopt some puppies!! 🐶 🦴 </p>
        </div> 
      } 
   </div>
    )
   }
 }

export default AdoptionContainer 