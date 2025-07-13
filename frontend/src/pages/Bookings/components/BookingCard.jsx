export default function BookingCard({ booking, onClick }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };



    return (
        <div className="booking-card-item" onClick={onClick}>
            <div className="booking-card-image">
                <img src={`http://localhost:3000${booking.carImage}`} alt={`${booking.carMake} ${booking.carModel}`} />
            </div>
            <div className="booking-card-content">
                <div className="booking-card-header">
                    <h3>{booking.carMake} {booking.carModel}</h3>
                    
                </div>
                <div className="booking-card-details">
                    <div className="booking-dates">
                        <p><strong>Pickup:</strong> {formatDate(booking.startDate)}</p>
                        <p><strong>Return:</strong> {formatDate(booking.endDate)}</p>
                    </div>
                    <div className="booking-location">
                        <p><strong>Location:</strong> {booking.carLocation}</p>
                    </div>
                </div>
                <div className="booking-card-footer">
                    <div className="booking-price">
                        <span className="price">KES{booking.totalPrice}</span>
                        <span className="booking-id">#{booking.bookingId}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}