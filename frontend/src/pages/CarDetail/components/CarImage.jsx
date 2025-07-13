export default function CarImage({ car }) {
    
    const imageUrl = `http://localhost:3000${car.coverImage}`; 
    
    return (
        <div className="car-image-card">
            <img 
                src={imageUrl} 
                alt={`${car.make} ${car.model}`}
                onError={(e) => {
                    e.target.src = 'https://github.com/shadcn.png'; // Fallback image
                }}
            />
        </div>
    );
}