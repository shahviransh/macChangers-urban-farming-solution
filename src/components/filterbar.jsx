import React from 'react'
import './filterbox.css'
const filterbar = () => {
  return (
    <div>
        <div className='filterbar'>
            <div className='date-filter'>
                <h6> Start date: </h6>
                <input type="date" name="date" />
            </div>
            <div className='location-filter'>
                <h6> Location: </h6>
                <input type="text" name="location" />
            </div>
            <div className='type-filter'>
                <h6> Type: </h6>
                <select name="type">
                    <option value="volunteer">volunteer</option>
                    <option value="paid">paid</option>
                    <option value="internship">internship</option>
                    <option value="coop">coop</option>
                </select>
            </div>
            <div className='searchbar'>
                <h6>
                    Search: 
                </h6>
                <input type="text" name="search" />
            </div>
            <div>
                <div className='filterbar__checkbox'>
                    <input type="checkbox" name="checkbox" />
                    <label> Show only positions with openings</label>
                </div>
            </div>
            <div>
                <button>Search</button>
            </div>
        </div>
    </div>
  )
}

export default filterbar
