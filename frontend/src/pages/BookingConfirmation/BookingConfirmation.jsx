import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../booking-confirmation.css";
import SuccessHeader from "./components/SuccessHeader";
import BookingDetails from "./components/BookingDetails";
import ActionButtons from "./components/ActionButtons";
import toast from "react-hot-toast";

export default function BookingConfirmation() {
    const { id } = useParams();
    const [bookingData, setBookingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            fetchBooking();
        }
    }, [id]);

    const fetchBooking = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/bookings/${id}`,{
                credentials: "include"
            });
            if (!response.ok) {
                if (response.status === 404) {
                    toast.error("Booking not found");
                    throw new Error('Booking not found');
                }
                toast.error("Failed to fetch booking");
                throw new Error('Failed to fetch booking');
            }
            const booking = await response.json();
            toast.success("Booking details loaded successfully");
            const formattedBooking = {
                bookingNumber: booking.bookingId,
                car: {
                    name: `${booking.carMake} ${booking.carModel}`,
                    year: booking.carYear,
                    image: `http://localhost:3000${booking.carImage}`,
                },
                rental: {
                    pickup: new Date(booking.startDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    }),
                    return: new Date(booking.endDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })
                },
                total: `KES${booking.totalPrice}`,
                status: booking.status
            };
            setBookingData(formattedBooking);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="success-container">
                <div className="card">
                    <p>Loading booking details...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="success-container">
                <div className="card">
                    <p>Error loading booking: {error}</p>
                </div>
            </div>
        );
    }

    if (!bookingData) {
        return (
            <div className="success-container">
                <div className="card">
                    <p>No booking found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="success-container">
            <div className="card">
                <SuccessHeader />
                <BookingDetails booking={bookingData} />
                <ActionButtons />
            </div>
        </div>
    );
}