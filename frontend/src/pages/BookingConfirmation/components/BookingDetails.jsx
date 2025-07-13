import CarDetail from "./CarDetail";
import RentalPeriod from "./RentalPeriod";
import TotalAmount from "./TotalAmount";

export default function BookingDetails({ booking }) {
    return (
        <div className="card-content">
            <div className="booking-details">
                <h3>Booking #{booking.bookingNumber}</h3>
                <CarDetail car={booking.car} />
                <RentalPeriod rental={booking.rental} />
                <TotalAmount amount={booking.total} />
            </div>
        </div>
    );
}