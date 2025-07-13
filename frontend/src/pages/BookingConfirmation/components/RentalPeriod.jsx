export default function RentalPeriod({ rental }) {
    return (
        <div className="detail-item">
            <h4>Rental Period</h4>
            <p><strong>Pickup:</strong> {rental.pickup}</p>
            <p><strong>Return:</strong> {rental.return}</p>
        </div>
    );
}