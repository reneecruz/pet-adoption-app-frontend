import React from 'react'


const AdoptionList = (props)=>  {
  const { img, name, age, breed } = props.adoption.pet
  return(
   <div>
     <div className="adoption-item">
       <div className="adoption-img-container">
       <img className="adoption-img"src={img}/>
       </div>
        <h3><span>Pet Name: </span>{name}</h3>
        <p> <span>Pet Age: </span>{age} </p>
        <p> <span>Pet Breed: </span>{breed} </p>
     </div>
   </div>
    )
   }

export default AdoptionList