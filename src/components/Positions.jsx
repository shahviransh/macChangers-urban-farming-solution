import React from 'react'
import PositionCard from './PositionCard'
import './Positions.css'

const Positions = () => {
  return (
    <div className='Pos'>
        <h1>Positions</h1>
        <div className='Pos__container'>
            <PositionCard Position="Gardener" Company="UrbanFarmsOrg" Description="This is a job $1/hr" link="https://timothy-leung.vercel.app/"/>
            <PositionCard Position="Gardener" Company="UrbanFarmsOrg" Description="This is a job $2/hr" link="https://timothy-leung.vercel.app/"/>
            <PositionCard Position="Gardener" Company="UrbanFarmsOrg" Description="This is a job $3/hr" link="https://timothy-leung.vercel.app/"/>
            <PositionCard Position="Gardener" Company="UrbanFarmsOrg" Description="This is a job $4/hr" link="https://timothy-leung.vercel.app/"/>
        </div>
    </div>
  )
}

export default Positions
