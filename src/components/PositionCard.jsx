import React from 'react'
import './PositionCard.css'
const PositionCard = (props) => {
  return (
    // make the poscard a link to the job posting
    // 
    <div>
        <a href={props.link}>
            <div className='PosCard'>
            <h3 className='PosCard-Pos'> {props.Position} </h3>
            <h6 className='PosCard-Comp'> {props.Company}</h6>
            <p className='PosCard-Desc'> {props.Description}</p>
            </div>
        </a>
    </div>
  )
}

export default PositionCard
