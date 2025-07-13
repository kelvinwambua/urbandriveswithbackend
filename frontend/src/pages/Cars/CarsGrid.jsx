import React from 'react';
import CarCard from './CarCard';

const CarsGrid = ({ cars }) => {
    return (
        <div className="container cars-container">
            <p className="results-count">{cars.length} cars available</p>
            <div className="cars-grid">
                {cars.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default CarsGrid;