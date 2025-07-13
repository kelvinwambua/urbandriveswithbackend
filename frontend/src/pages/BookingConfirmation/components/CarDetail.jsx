export default function CarDetail({ car }) {
    return (
        <div className="detail-item car-detail">
            <img src={car.image} alt={`${car.name} Image`} />
            <div>
                <h4>{car.name}</h4>
                <p>{car.year} • {car.color}</p>
            </div>
        </div>
    );
}