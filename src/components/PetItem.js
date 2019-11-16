import React from 'react'

const PetItem = (props) => {
 
   const {name, img} = props.pet

  return(
   <div className="dog-item-container"> 
     <div className="dog-item" onClick={() => props.handlePetView(props.pet)}>
        <div className="dog-img-div">
             <img className="dog-img" src={img} alt={name}/>
        </div>
        <div className="dog-info">
             <h2>{name} </h2>
             <p> { props.pet.adoption ? 'I am adopted' : "Adopt me"}</p>
        </div>  
        <div className="clear"></div>
     </div>
   </div>
    )
   }


export default PetItem