import React, { useState } from 'react';
import './FilterColum.css';

function FilterColum(params) {
    const [filters, setFilters] = useState([]);

    const handleFilterChange = (filter) => {
      if (filters.includes(filter)) {
        setFilters(filters.filter((item) => item !== filter));
      } else {
        setFilters([...filters, filter]);
      }
    };

    return (
        <div className='filter-container'>
            <h3>Filter By:</h3>
            <label>
                <input type="checkbox" checked={filters.includes('LeetCode')} onChange={() => handleFilterChange('LeetCode')}/>
                LeetCode
            </label>
            <br />
            <label>
                <input type="checkbox" checked={filters.includes('New Grad')} onChange={() => handleFilterChange('New Grad')} />
                New Grad
            </label>
            <br />
            <label>
                <input type="checkbox" checked={filters.includes('Professional')} onChange={() => handleFilterChange('Professional')} />
                Professional
            </label>
            <br />
            <label>
                <input type="checkbox" checked={filters.includes('Beginner')} onChange={() => handleFilterChange('Beginner')} />
                Beginner
            </label>
            <br />
            <label>
                <input type="checkbox" checked={filters.includes('All')} onChange={() => handleFilterChange('All')} />
                All
            </label>
        </div>
    );
}

export default FilterColum;