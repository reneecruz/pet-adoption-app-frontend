import React from 'react'
import PetItem from './PetItem'

const PetList = (props) => {

  return(
 <> 
   <label htmlFor="search">Search by name </label>
   <input type="text" value ={props.inputValue}  onChange={props.petFilterOnChange}/>
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