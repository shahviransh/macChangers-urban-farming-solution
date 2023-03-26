import React from 'react'
import PositionCard from './PositionCard'
import './Positions.css'

const Positions = () => {
  return (
    <div className='Pos'>
      <h1 className='Pos__title'>Positions</h1>
      <div className='Pos__container'>
        <PositionCard Position="Gardener" Company="UrbanFarmsOrg" Description="VOLUNTEERING POSITION! 1" link="https://timothy-leung.vercel.app/" />
        <PositionCard Position="Gardener" Company="UrbanFarmsOrg" Description="VOLUNTEERING POSITION! 2" link="https://timothy-leung.vercel.app/" />
        <PositionCard Position="Gardener" Company="UrbanFarmsOrg" Description="VOLUNTEERING POSITION! 3" link="https://timothy-leung.vercel.app/" />
        <PositionCard Position="Gardener" Company="UrbanFarmsOrg" Description="VOLUNTEERING POSITION! 4" link="https://timothy-leung.vercel.app/" />
      </div>
    </div>
  )
}

export default Positions
