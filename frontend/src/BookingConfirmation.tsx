import "./booking-confirmation.css"
export default function BookingConfirmation() {
    return (
<div className="success-container">
        <div className="card">
            <div className="success-header">
                <div className="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h1>Booking Confirmed!</h1>
                <p>Your rental has been successfully booked. We've sent a confirmation email to your address.</p>
            </div>
            <div className="card-content">
                <div className="booking-details">
                    <h3>Booking #12345</h3>
                    <div className="detail-item car-detail">
                        <img src="https://pid5zlmxou.ufs.sh/f/JyQemEOsK8SFSEsIkVvwagl2MZnfubVoJQU5hH1mv9ze7Wik" alt="Car Image"/>
                        <div>
                            <h4>Alfa Romeo Giulia</h4>
                            <p>2022 • Red</p>
                        </div>
                    </div>
                    <div className="detail-item">
                        <h4>Rental Period</h4>
                        <p><strong>Pickup:</strong> Jun 10, 2025</p>
                        <p><strong>Return:</strong> Jun 12, 2025</p>
                    </div>
                    <div className="detail-item total-amount">
                        <h4>Total Amount</h4>
                        <span>KES7700.00</span>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <a href="index.html" className="btn btn-outline">Browse More Cars</a>
                <a href="#" className="btn btn-primary">View Booking Details</a>
            </div>
        </div>
    </div>
    )}