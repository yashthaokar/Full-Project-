
import React from 'react'
import Card  from  './Card'
import './DataCard.css'

const DataCard = ({data}) => {
  return (
    <div className='dispaly-cards'>
        

{data.map( (ele)=>{
  return (
    <Card ele={ele}/>
  )
})}



    </div>
  )
}

export default DataCard;