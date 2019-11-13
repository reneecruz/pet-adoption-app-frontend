import React, { Component } from 'react'
// import AdoptionItem from './AdoptionItem'

class AdoptionList extends Component {
 
 render() {
  //  console.log(this.props.adoption)
  return(
   <div>
    
     <div className="adoption-item">
       <div className="adoption-img-container">
       <img className="adoption-img"src={this.props.adoption.pet.img}/>
       </div>
       
        <h3><span>Pet Name: </span>{this.props.adoption.pet.name}</h3>
        <p> <span>Pet Age: </span>{this.props.adoption.pet.age} </p>
        <p> <span>Pet Breed: </span>{this.props.adoption.pet.breed} </p>
     </div>
   </div>
    )
   }
 }

export default AdoptionList