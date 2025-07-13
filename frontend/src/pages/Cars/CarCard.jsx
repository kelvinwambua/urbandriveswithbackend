import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarCard = ({ car }) => {
    
 const navigate = useNavigate();

const handleViewDetails = () => {
    navigate(`/book-car/${car.id}`);
};
    const cardStyles = {
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        maxWidth: '320px',
        margin: '16px'
    };

    const imageWrapperStyles = {
        position: 'relative',
        width: '100%',
        height: '200px',
        overflow: 'hidden'
    };

    const imageStyles = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };

    

    const contentStyles = {
        padding: '16px'
    };

    const headerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '12px'
    };

    const titleStyles = {
        fontSize: '18px',
        fontWeight: '600',
        margin: '0 0 4px 0',
        color: '#1f2937'
    };

    const metaStyles = {
        fontSize: '14px',
        color: '#6b7280',
        margin: '0'
    };

    const priceStyles = {
        textAlign: 'right'
    };

    const priceAmountStyles = {
        fontSize: '18px',
        fontWeight: '700',
        color: '#1f2937',
        display: 'block'
    };

    const pricePeriodStyles = {
        fontSize: '12px',
        color: '#6b7280'
    };

    const descriptionStyles = {
        fontSize: '14px',
        color: '#4b5563',
        marginBottom: '16px',
        lineHeight: '1.5'
    };

    const buttonStyles = {
        width: '100%',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease'
    };

    return (
        <div className="car-card" style={cardStyles}>
            <div className="card-image-wrapper" style={imageWrapperStyles}>
                <img 
                    src={`http://localhost:3000${car.coverImage || car.images?.[0]}`} 
                    alt={`${car.make} ${car.model}`} 
                    style={imageStyles}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/320x200?text=No+Image';
                    }}
                />
                
            </div>
            <div className="card-content" style={contentStyles}>
                <div className="card-header" style={headerStyles}>
                    <div>
                        <h3 style={titleStyles}>{car.make} {car.model}</h3>
                        <p className="car-meta" style={metaStyles}>{car.year} • {car.transmission}</p>
                    </div>
                    <div className="price" style={priceStyles}>
                        <span className="price-amount" style={priceAmountStyles}>KES{car.dailyRate}</span>
                        <span className="price-period" style={pricePeriodStyles}>/day</span>
                    </div>
                </div>
                <p className="description" style={descriptionStyles}>{car.description}</p>
                <button 
                    className="btn btn-card"
                    style={buttonStyles}
                    onClick={handleViewDetails}

                    onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default CarCard;