import React from 'react'
const filterbar = () => {
  return (
    <div>
        <div className='flex justify-between items-center mb-5 px-14 py-2'>
            <div className='date-filter'>
                  <h6 className="text-black"> Start date: </h6>
                <input type="date" name="date" />
            </div>
            <div className='location-filter'>
                  <h6 className="text-black"> Location: </h6>
                <input type="text" name="location" />
            </div>
            <div className='type-filter'>
                  <h6 className="text-black"> Type: </h6>
                <select name="type">
                    <option value="volunteer">volunteer</option>
                    <option value="paid">paid</option>
                    <option value="internship">internship</option>
                    <option value="coop">coop</option>
                </select>
            </div>
            <div className='searchbar'>
                  <h6 className="text-black">
                    Search: 
                </h6>
                <input type="text" name="search" />
            </div>
            <div>
                <div className='filterbar__checkbox'>
                    <input type="checkbox" name="checkbox" />
                      <label className="text-black"> Show only positions with openings</label>
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
