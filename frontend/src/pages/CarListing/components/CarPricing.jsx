export default function CarPricing({ formData, onChange }) {
    return (
        <div className="form-section">
            <h2>Pricing</h2>
            <div className="pricing-grid">
                <div className="form-group">
                    <label htmlFor="daily-rate">Daily Rate (KES)</label>
                    <input 
                        type="number" 
                        id="daily-rate" 
                        className="form-input" 
                        placeholder="e.g. 5000" 
                        value={formData.dailyRate}
                        onChange={(e) => onChange('dailyRate', e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="weekly-rate">Weekly Rate (KES)</label>
                    <input 
                        type="number" 
                        id="weekly-rate" 
                        className="form-input" 
                        placeholder="e.g. 30000" 
                        value={formData.weeklyRate}
                        onChange={(e) => onChange('weeklyRate', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="monthly-rate">Monthly Rate (KES)</label>
                    <input 
                        type="number" 
                        id="monthly-rate" 
                        className="form-input" 
                        placeholder="e.g. 120000" 
                        value={formData.monthlyRate}
                        onChange={(e) => onChange('monthlyRate', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}