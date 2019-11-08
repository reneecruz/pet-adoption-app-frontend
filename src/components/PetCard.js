import React, { Component } from 'react'

class PetCard extends Component {
 

 render() {
   const {name, img, age, breed, location} = this.props.pet
  //  console.log(this.props.pet)
  return(
   <div className="dog-card-container"> 
      <div className="dog-card" onClick={() => this.props.handleClick(this.props.pet)}>
          <img className="dog-card-img" src={img} alt={name}/>
          <h2><b>Name : </b>{name} </h2>
          <p><b>Age : </b>{age} </p>
          <p><b>Breed : </b> {breed}</p>
          <p><b>Location : </b> {location}</p>
      <div className="clear"></div>
     </div>
       
       
     
   </div>
    )
   }
 }

export default PetCard