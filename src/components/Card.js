import React from 'react';
import {useHistory} from 'react-router-dom'
import "./Card.css"

function Card(props){
// console.log(props);
const history = useHistory()
const gotoDetails = ()=>{
    history.push(`/company/${props.company._id}`)
}

 return(
  <div
   onClick={gotoDetails} style={{cursor:'pointer',margin:10}}>
    <h3 className='title'> {props.company.name}  </h3>


  </div>

 )
}
export default Card;
