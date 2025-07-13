import React, { useState, useEffect } from 'react';
import CarsGrid from './CarsGrid';
import "../../cars.css";
import Navbar from '../Home/components/Navbar';
import toast from 'react-hot-toast';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:3000/api/cars');
                if (!response.ok) {
                    toast.error('Failed to fetch cars');
                    throw new Error('Failed to fetch cars');
                }
                const data = await response.json();
                toast.success('Cars loaded successfully');
                setCars(data);
            } catch (err) {
                toast.error(`Error: ${err.message}`);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    if (loading) {
        return (
            <div>
                <Navbar />
                <main>
                    <div className="container" style={{ padding: '2rem 0', textAlign: 'center' }}>
                        <p>Loading cars...</p>
                    </div>
                </main>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <Navbar />
                <main>
                    <div className="container" style={{ padding: '2rem 0', textAlign: 'center' }}>
                        <p>Error: {error}</p>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <main>
                <div className="page-header">
                    <div className="container">
                        <h1>Available Cars</h1>
                        <p>Find the perfect car for your journey</p>
                    </div>
                </div>
                <CarsGrid cars={cars} />
            </main>
        </div>
    );
};

export default Cars;