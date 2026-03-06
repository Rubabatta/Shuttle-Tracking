import React from 'react'
import './SearchBar.css'
import Location from '../Location/Location'

const SearchBar = () => {
  return (
    <div className="secrch-location">
    <div className='searchbg'>
      <div>
        <input type="search" />
        <button>Track Now</button>
      </div>
    </div>
    <Location/>
    </div>
  )
}

export default SearchBar
