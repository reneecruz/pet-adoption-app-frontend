import React from 'react'
import PetItem from './PetItem'

const PetList = (props) => {

  return(
  <>  
     <label>Find Pet By Name</label>
     <input value={props.inputValue} onChange={props.petFilterOnChange}></input>

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