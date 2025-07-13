import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';

export default function BookingCard({ car }) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const calculateTotalPrice = () => {
        if (!startDate || !endDate) return 0;
        const timeDiff = endDate.getTime() - startDate.getTime();
        const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return days * car.dailyRate;
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        
        if (!startDate || !endDate) {
            alert('Please select rental dates');
            return;
        }

        setIsLoading(true);
        
        try {
            const response = await fetch('http://localhost:3000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify({
                    carId: car.id,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    totalPrice: calculateTotalPrice()
                })
            });

            if (response.ok) {
                const booking = await response.json();
                toast.success('Booking created successfully!');
                
                navigate(`/booking/${booking[0].id}`);
            } else {
                const error = await response.json();
                toast.error(`Booking failed: ${error.message}`);
            }
        } catch (error) {
            console.error('Booking error:', error);
            alert('Failed to create booking. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const totalPrice = calculateTotalPrice();
    const days = startDate && endDate ? Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) : 0;

    return (
        <div className="card booking-card">
            <div className="card-header booking-header">
                <div>
                    <span className="price">KES {car.dailyRate}</span>
                    <span className="price-period">per day</span>
                </div>
            </div>
            <div className="card-content">
                <div className="form-group">
                    <label>Select rental dates</label>
                    <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        placeholderText="Pick date range"
                        minDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                        className="date-picker-input"
                        isClearable
                    />
                </div>
                
                {days > 0 && (
                    <div className="booking-summary">
                        <p>{days} day{days > 1 ? 's' : ''} × KES {car.dailyRate}</p>
                        <p className="total-price">Total: KES {totalPrice}</p>
                    </div>
                )}
                
                <button 
                    onClick={handleBooking}
                    className="btn btn-primary btn-block"
                    disabled={isLoading || !startDate || !endDate}
                >
                    {isLoading ? 'Booking...' : 'Book Now'}
                </button>
                
                <p className="cancellation-policy">Free cancellation up to 24 hours before pickup</p>
            </div>
        </div>
    );
}