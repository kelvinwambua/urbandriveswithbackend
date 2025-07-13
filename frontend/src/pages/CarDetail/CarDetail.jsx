import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../../car-detail.css";
import CarHeader from "./components/CarHeader";
import CarImage from "./components/CarImage";
import CarDescription from "./components/CarDescription";
import CarFeatures from "./components/CarFeatures";
import BookingCard from "./components/BookingCard";
import Navbar from "../Home/components/Navbar";
import toast from 'react-hot-toast';

export default function CarDetail() {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/cars/${id}`);
                if (!response.ok) {
                    toast.error('Failed to fetch car details');
                    throw new Error('Car not found');
                    
                }
                const carData = await response.json();
                toast.success('Car details loaded successfully');
                setCar(carData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCar();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!car) return <div>Car not found</div>;

    return (
        <div>
            <Navbar />
            <main>
                <CarHeader car={car} />
                <div className="container detail-container">
                    <div className="main-content">
                        <CarImage car={car} />
                        <CarDescription car={car} />
                        <CarFeatures car={car} />
                    </div>
                    <aside className="sidebar">
                        <BookingCard car={car} />
                    </aside>
                </div>
            </main>
        </div>
    );
}