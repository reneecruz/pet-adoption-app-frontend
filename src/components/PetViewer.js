import React from 'react'
import PetCard from './PetCard'

const PetViewer = (props) => {
  
  return(
     <div>
       <button onClick={props.handlePetGoBack}>Back</button>
       <PetCard pet={props.pet} 
                handlePetGoBack={props.handlePetGoBack} 
                adoptDoggy={props.adoptDoggy}/>
     </div>
     )
   }


export default PetViewer