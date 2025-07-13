export default function CarDescription({ car }) {
    return (
        <div className="card">
            <div className="card-header">
                <h2>About this car</h2>
            </div>
            <div className="card-content">
                <p>{car.description}</p>
            </div>
        </div>
    );
}