import React from 'react'
import { useParams } from 'react-router-dom';
import './Card.css'

const Card = ({ele}) => {
  
  let getdata = localStorage.getItem('data');

  const clickHandler=(param)=>{
    localStorage.setItem('data', param) ;
   
    

  };

  return (
    <div className="kuchv">
   <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src = {ele.image} alt="Avatar" style={{width:'300px', height:" 300px" }}/>
    </div>
    <div className="flip-card-back">
      <h1>{ele.name}</h1>
      <h4>{ele.species}</h4>
      <h4>{ele.gender}</h4>
      <h4>{ele.status}</h4>
      <h4>{ele.origin.name}</h4>
    </div>
    
  </div>
  
</div>
<button type="button" class="btn btn-warning"onClick={clickHandler} >Like!!</button>

    </div>
   

  )
}

export default Card