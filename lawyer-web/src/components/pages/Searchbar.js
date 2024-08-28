import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Searchbar = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = () => {
        if (searchInput.trim() !== '') {
            const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
            window.open(googleSearchURL, '_blank'); // Open Google search in a new tab
        }
    };

    return (
        <div className="container my-4">
            {/* Custom Search Bar */}
            <div className="input-group mt-3">
                <input
                    type="text"
                    className="form-control border-primary rounded"
                    style={{ border: '1px solid rgb(9, 9, 70)', height: '3rem' }}
                    placeholder="Search here ..."
                    value={searchInput}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-success ms-2 rounded"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Searchbar;
