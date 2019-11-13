import React from 'react'

const PetCard = (props) => {
 
   const {name, img, age, breed, location} = props.pet
         
  return(
   <div className="dog-card-container"> 
      <div className="dog-card" onClick={() => props.handlePetGoBack(props.pet)}>
          <img className="dog-card-img" src={img} alt={name} title={name}/>
          <h2><b>Name : </b>{name} </h2>
          <p><b>Age : </b>{age} </p>
          <p><b>Breed : </b> {breed}</p>
          <p><b>Location : </b> {location}</p>

        <div className="clear"></div>
     </div> 
     <div>
        {props.pet.adoption ? 
        `Im Adopted!! by ${props.pet.adoption.user.name}` : 
        <button onClick={() => props.adoptDoggy(props.pet)}>
          Adopt Me ❣️
        </button>}
      </div> 
   </div>
    )
   }


export default PetCard