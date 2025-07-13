export default function CarFeatures({ car }) {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Features & Specifications</h2>
            </div>
            <div className="card-content features-grid">
                <div className="feature-item">Seating: {car.seats} passengers</div>
                <div className="feature-item">Transmission: {car.transmission}</div>
                <div className="feature-item">Fuel Type: {car.fuelType}</div>
                <div className="feature-item">Insurance: Included</div>
                <div className="feature-item">AC: Available</div>
                <div className="feature-item">Mileage: Unlimited</div>
                {car.features && car.features.map((feature, index) => (
                    <div key={index} className="feature-item">{feature}</div>
                ))}
            </div>
        </div>
    );
}