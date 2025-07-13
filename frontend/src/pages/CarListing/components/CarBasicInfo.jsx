export default function CarBasicInfo({ formData, onChange }) {
    return (
        <div className="form-section">
            <h2>Basic Information</h2>
            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="car-make">Make</label>
                    <select 
                        id="car-make" 
                        className="form-input" 
                        value={formData.make}
                        onChange={(e) => onChange('make', e.target.value)}
                        required
                    >
                        <option value="">Select Make</option>
                        <option value="toyota">Toyota</option>
                        <option value="honda">Honda</option>
                        <option value="nissan">Nissan</option>
                        <option value="mazda">Mazda</option>
                        <option value="isuzu">Isuzu</option>
                        <option value="mitsubishi">Mitsubishi</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="car-model">Model</label>
                    <input 
                        type="text" 
                        id="car-model" 
                        className="form-input" 
                        placeholder="e.g. Camry" 
                        value={formData.model}
                        onChange={(e) => onChange('model', e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="car-year">Year</label>
                    <select 
                        id="car-year" 
                        className="form-input" 
                        value={formData.year}
                        onChange={(e) => onChange('year', e.target.value)}
                        required
                    >
                        <option value="">Select Year</option>
                        {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="transmission">Transmission</label>
                    <select 
                        id="transmission" 
                        className="form-input" 
                        value={formData.transmission}
                        onChange={(e) => onChange('transmission', e.target.value)}
                        required
                    >
                        <option value="">Select Transmission</option>
                        <option value="manual">Manual</option>
                        <option value="automatic">Automatic</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="fuel-type">Fuel Type</label>
                    <select 
                        id="fuel-type" 
                        className="form-input" 
                        value={formData.fuelType}
                        onChange={(e) => onChange('fuelType', e.target.value)}
                        required
                    >
                        <option value="">Select Fuel Type</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="seats">Number of Seats</label>
                    <select 
                        id="seats" 
                        className="form-input" 
                        value={formData.seats}
                        onChange={(e) => onChange('seats', e.target.value)}
                        required
                    >
                        <option value="">Select Seats</option>
                        <option value="2">2 Seats</option>
                        <option value="4">4 Seats</option>
                        <option value="5">5 Seats</option>
                        <option value="7">7 Seats</option>
                        <option value="8">8+ Seats</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea 
                    id="description" 
                    className="form-textarea" 
                    placeholder="Tell us about your car..." 
                    rows="4" 
                    value={formData.description}
                    onChange={(e) => onChange('description', e.target.value)}
                    required
                />
            </div>
        </div>
    );
}