import "./car-detail.css";
export default function CarDetail() {
    return (
        <div>
             <header className="navbar">
        <div className="container">
            <a href="index.html" className="logo">
                <img src="https://raw.githubusercontent.com/kelvinwambua/urbandrives/main/web/public/Logo_With_Text.png" alt="Urban Drives Logo"/>
            </a>
            <nav className="nav-links">
                <a href="index.html#rental-deals">Rental deals</a>
                <a href="index.html#how-it-works">How it works</a>
                <a href="index.html#why-choose-us">Why choose us</a>
            </nav>
            <div className="nav-auth">
                <a href="signin.html" className="btn btn-ghost">Sign in</a>
                <a href="signup.html" className="btn btn-primary">Sign up</a>
            </div>
        </div>
    </header>

    <main>
        <div className="page-header">
            <div className="container">
                 <a href="cars.html" className="back-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                    Back to Cars
                </a>
                <div className="header-content">
                    <div>
                        <h1>BMW M8</h1>
                        <p>2022 • Charcoal Grey • License: KEE 109A</p>
                    </div>
                    <div className="status-badge available">available</div>
                </div>
            </div>
        </div>

        <div className="container detail-container">
            <div className="main-content">
                <div className="car-image-card">
                    <img src="https://pid5zlmxou.ufs.sh/f/JyQemEOsK8SFSEsIkVvwagl2MZnfubVoJQU5hH1mv9ze7Wik" alt="Alfa Romeo Giulia"/>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h2>About this car</h2>
                    </div>
                    <div className="card-content">
                        <p>Super Fast German 4-door  Sports Car </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h2>Features & Specifications</h2>
                    </div>
                    <div className="card-content features-grid">
                        <div className="feature-item">Seating: 4-5 passengers</div>
                        <div className="feature-item">Transmission: Automatic</div>
                        <div className="feature-item">Fuel Type: Gasoline</div>
                        <div className="feature-item">Insurance: Included</div>
                        <div className="feature-item">AC: Available</div>
                        <div className="feature-item">Rating: 4.8/5.0</div>
                    </div>
                </div>
            </div>
            <aside className="sidebar">
                <div className="card booking-card">
                    <div className="card-header booking-header">
                        <div>
                            <span className="price">KES7700</span>
                            <span className="price-period">per day</span>
                        </div>
                        <div className="rating">
                            <span>⭐ 4.8</span>
                            <span>(24 reviews)</span>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="form-group">
                            <label>Select rental dates</label>
                            <input type="text" placeholder="Pick date range"/>
                        </div>
                        <a href="booking.html" className="btn btn-primary btn-block">Book Now</a>
                        <p className="cancellation-policy">Free cancellation up to 24 hours before pickup</p>
                    </div>
                </div>
            </aside>
        </div>
    </main>
        </div>
    );
}
