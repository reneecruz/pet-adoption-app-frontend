import React, { Component } from 'react'

class PetItem extends Component {
 state = {
   imgUrl: ''
 }

 componentDidMount(){
   fetch('https://dog.ceo/api/breeds/image/random')
   .then(res => res.json())
   .then(imgObject => {
    //  console.log(imgObject)
     this.setState({
       imgUrl: imgObject.message
     })
   })
 }
 render() {
   const {name, age, breed, location} = this.props.pet
  //  console.log(this.props.pet)
  return(
   <div className="dog-item-container"> 
     <div className="dog-item">
     <img className="dog-img" src={this.state.imgUrl} alt={name}/>
     <h2>{name} </h2>
     <div className="clear"></div>
     </div>
     
     
   </div>
    )
   }
 }

export default PetItem