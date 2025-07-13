import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BookingsHeader({ bookingsCount }) {
    const navigate = useNavigate();

    return (
        <div className="page-header">
            <div className="container">
                <button 
                    onClick={() => navigate(-1)}
                    className="back-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    <ArrowLeft />
                    Back
                </button>
                <div className="header-content">
                    <div>
                        <h1>My Bookings</h1>
                        <p>{bookingsCount} {bookingsCount === 1 ? 'booking' : 'bookings'} found</p>
                    </div>
                </div>
            </div>
        </div>
    );
}