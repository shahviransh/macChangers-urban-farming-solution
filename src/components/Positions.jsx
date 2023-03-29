import React from 'react'
import PositionCard from './PositionCard'
import './Positions.css'
import Filterbar from './filterbar.jsx'
const Positions = () => {
  return (
    <div class="flex flex-auto">
      <div className='Pos'>
        <h1 className='Pos__title'>Positions</h1>
        <Filterbar/>
        <div className='Pos__container'>
          <PositionCard Position="Plant Interrogator" Company="By Hamilton Planters" Description="Help needed handling intrusive plant species situated around the garden.
Location: Hamilton" link="https://timothy-leung.vercel.app/" />
          <PositionCard Position="Gardener" Company="UrbanFarmsOrg" Description="VOLUNTEERING POSITION! 2" link="https://timothy-leung.vercel.app/" />
          <PositionCard Position="Gardener" Company="UrbanFarmsOrg" Description="VOLUNTEERING POSITION! 3" link="https://timothy-leung.vercel.app/" />
          <PositionCard Position="Gardener" Company="UrbanFarmsOrg" Description="VOLUNTEERING POSITION! 4" link="https://timothy-leung.vercel.app/" />
          <PositionCard Position="Gardener" Company="UrbanFarmsOrg" Description="VOLUNTEERING POSITION! 5" link="https://timothy-leung.vercel.app/" />
          <PositionCard Position="Gardener" Company="UrbanFarmsOrg" Description="VOLUNTEERING POSITION! 6" link="https://timothy-leung.vercel.app/" />
        </div>
      </div>
    </div>
  )
}

export default Positions
