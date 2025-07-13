export default function CarLocation({ formData, onChange }) {
    return (
        <div className="form-section">
            <h2>Location</h2>
            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="county">County</label>
                    <select 
                        id="county" 
                        className="form-input" 
                        value={formData.location}
                        onChange={(e) => onChange('location', e.target.value)}
                        required
                    >
                        <option value="">Select County</option>
                        <option value="nairobi">Nairobi</option>
                        <option value="kiambu">Kiambu</option>
                        <option value="machakos">Machakos</option>
                        <option value="kajiado">Kajiado</option>
                        <option value="mombasa">Mombasa</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="pickup-location">Pickup Location</label>
                    <input 
                        type="text" 
                        id="pickup-location" 
                        className="form-input" 
                        placeholder="Exact pickup address" 
                        value={formData.pickupLocation}
                        onChange={(e) => onChange('pickupLocation', e.target.value)}
                        required 
                    />
                </div>
            </div>
        </div>
    );
}