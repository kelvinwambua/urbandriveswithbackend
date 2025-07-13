import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingsHeader from "./components/BookingsHeader";
import BookingCard from "./components/BookingCard";
import EmptyState from "./components/EmptyState";
import LoadingState from "./components/LoadingState";
import "../../bookings.css"
import toast from "react-hot-toast";

export default function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/bookings',{
                credentials: "include"
            });
            if (!response.ok) {
                toast.error("Failed to fetch bookings");
                throw new Error('Failed to fetch bookings');
            }
            const data = await response.json();
            setBookings(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleBookingClick = (bookingId) => {
        navigate(`/booking/${bookingId}`);
    };

    if (loading) return <LoadingState />;
    if (error) return <div className="container" style={{ padding: '2rem 0' }}>Error: {error}</div>;

    return (
        <div>
            <BookingsHeader bookingsCount={bookings.length} />
            <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
                {bookings.length === 0 ? (
                    <EmptyState />
                ) : (
                    <div className="bookings-grid">
                        {bookings.map((booking) => (
                            <BookingCard
                                key={booking.bookingId}
                                booking={booking}
                                onClick={() => handleBookingClick(booking.bookingId)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}