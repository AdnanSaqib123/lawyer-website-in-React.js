import React, { useState } from 'react';

const Searchbar = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = () => {
        console.log('Searching for:', searchInput);
        // Add search logic here
    };

    return (
        <div className="bg-img-text input-group" style={{ height: '3%', width: '80%', marginLeft: '10%' }}>
            <input
                type="text"
                className="form-control"
                style={{ border: '1px solid rgb(9, 9, 70)', borderRadius: '6px', height: '3rem' }}
                placeholder="Search here ..."
                value={searchInput}
                onChange={handleInputChange}
            />
            <button
                className="btn btn-success"
                style={{ marginLeft: '8px', borderRadius: '2px' }}
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default Searchbar;
