import React, { Component } from 'react'

class PetItem extends Component {
 

 render() {
   const {name, img} = this.props.pet
  //  console.log(this.props.pet)
  return(
   <div className="dog-item-container"> 
     <div className="dog-item" onClick={() => this.props.handlePetView(this.props.pet)}>
        <div className="dog-img-div">
         <img className="dog-img" src={img} alt={name}/>
        </div>
     <h2>{name} </h2>
     <p> { this.props.pet.adoption ? 'I am adopted' : "Adopt me"}</p>
     <div className="clear"></div>
   </div>
       
            
     
   </div>
    )
   }
 }

export default PetItem