export default function CarFeatures({ selectedFeatures, onFeatureToggle }) {
    const features = [
        { id: 'air-conditioning', label: 'Air Conditioning' },
        { id: 'bluetooth', label: 'Bluetooth' },
        { id: 'gps', label: 'GPS Navigation' },
        { id: 'backup-camera', label: 'Backup Camera' },
        { id: 'leather-seats', label: 'Leather Seats' },
        { id: 'sunroof', label: 'Sunroof' },
        { id: 'usb-ports', label: 'USB Ports' },
        { id: 'child-seat', label: 'Child Seat Available' }
    ];

    return (
        <div className="form-section">
            <h2>Features</h2>
            <div className="features-grid">
                {features.map(feature => (
                    <div key={feature.id} className="feature-item">
                        <input 
                            type="checkbox" 
                            id={feature.id} 
                            className="feature-checkbox"
                            checked={selectedFeatures.includes(feature.id)}
                            onChange={() => onFeatureToggle(feature.id)}
                        />
                        <label htmlFor={feature.id}>{feature.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}