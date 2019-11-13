import React from 'react'
import PetItem from './PetItem'

const PetList = (props) => {

  return(

     <div className="dog-list">
        {
           props.pets.map(pet => {
           return <PetItem pet={pet} key={pet.id} handlePetView={props.handlePetView}/>
           })
        }
     </div>
  </>
    )
   }


export default PetList