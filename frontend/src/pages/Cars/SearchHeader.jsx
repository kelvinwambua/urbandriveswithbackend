import React, { useState } from 'react';

const SearchHeader = ({ onSearch, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [dateRange, setDateRange] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch({ searchTerm, dateRange });
    };

    return (
        <div className="page-header">
            <div className="container">
                <h1>Available Cars</h1>
                <p>Find the perfect car for your journey</p>
                <form className="search-filter-form" onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        placeholder="Search by make, model, or color..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Pick date range"
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                    />
                    <button type="button" className="btn btn-outline" onClick={onFilter}>
                        Filters
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchHeader;