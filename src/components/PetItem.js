import React, { Component } from 'react'

class PetItem extends Component {
 

 render() {
   const {name, img, age, breed, location} = this.props.pet
  //  console.log(this.props.pet)
  return(
   <div className="dog-item-container"> 
     <div className="dog-item" onClick={() => this.props.handleClick(this.props.pet)}>
        <div className="dog-img-div">
         <img className="dog-img" src={img} alt={name}/>
        </div>
     <h2>{name} </h2>
     <div className="clear"></div>
     </div>
       
       
     
   </div>
    )
   }
 }

export default PetItem