import React from 'react'
import  AdoptionList from '../components/AdoptionList'

const AdoptionContainer = (props) => {
    
  return(
   <div>
       <h2>My Adoptions:</h2>
           {props.adoptions && props.adoptions.length > 0 ? 
            props.adoptions.map(adoption => {
               return <AdoptionList adoption={adoption} key={adoption.id}/>
            })
            :
            <div>
               <p>You should definitely adopt some puppies!! 🐶 🦴 </p>
            </div> 
           } 
   </div>
    )
   }


export default AdoptionContainer 