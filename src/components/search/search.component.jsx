import React from 'react'
import './search.styles.scss'

export const Search = ({placeholder, handleChange}) => {
    return (
        <div className="search-container">
            <input type="search" placeholder={placeholder} onChange={handleChange}/>
        </div>
    )
}