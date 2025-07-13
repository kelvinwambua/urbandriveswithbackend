    import  "./cars.css";
const Cars = () => {
        return(
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
                    <h1>Available Cars</h1>
                    <p>Find the perfect car for your journey</p>
                    <form className="search-filter-form">
                        <input type="text" placeholder="Search by make, model, or color..."/>
                        <input type="text" placeholder="Pick date range"/>
                        <button type="button" className="btn btn-outline">Filters</button>
                    </form>
                </div>
            </div>

            <div className="container cars-container">
                <p className="results-count">6 cars available</p>
                <div className="cars-grid">
                    <div className="car-card">
                        <div className="card-image-wrapper">
                            <img src="https://pid5zlmxou.ufs.sh/f/JyQemEOsK8SFSEsIkVvwagl2MZnfubVoJQU5hH1mv9ze7Wik" alt="Alfa Romeo Giulia"/>
                            <div className="status-badge available">available</div>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <div>
                                    <h3>Alfa Romeo Giulia</h3>
                                    <p className="car-meta">2022 • Red</p>
                                </div>
                                <div className="price">
                                    <span className="price-amount">KES7700</span>
                                    <span className="price-period">/day</span>
                                </div>
                            </div>
                            <p className="description">Italian sports sedan with passionate performance</p>
                            <a href="car-detail.html" className="btn btn-card">View Details</a>
                        </div>
                    </div>

                    <div className="car-card">
                        <div className="card-image-wrapper">
                            <img src="https://res.cloudinary.com/dqsrkjnvg/image/upload/v1748195992/urbandrives/cars/1748195989901_images.webp.webp" alt="BMW Car"/>
                            <div className="status-badge available">available</div>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <div>
                                    <h3>BMW Car</h3>
                                    <p className="car-meta">2014 • Beige</p>
                                </div>
                                <div className="price">
                                    <span className="price-amount">KES1212</span>
                                    <span className="price-period">/day</span>
                                </div>
                            </div>
                            <p className="description">sdsdssdd</p>
                            <a href="car-detail.html" className="btn btn-card">View Details</a>
                        </div>
                    </div>

                    <div className="car-card">
                        <div className="card-image-wrapper">
                            <img src="https://res.cloudinary.com/dqsrkjnvg/image/upload/v1748196459/urbandrives/cars/1748196456654_Beep_Beep_Blue_Car.png.png" alt="Honda Test Car"/>
                            <div className="status-badge available">available</div>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <div>
                                    <h3>Honda Test Car</h3>
                                    <p className="car-meta">2019 • Green</p>
                                </div>
                                <div className="price">
                                    <span className="price-amount">KES1212</span>
                                    <span className="price-period">/day</span>
                                </div>
                            </div>
                            <p className="description">dssdsdsd</p>
                            <a href="car-detail.html" className="btn btn-card">View Details</a>
                        </div>
                    </div>

                    <div className="car-card">
                        <div className="card-image-wrapper">
                            <img src="https://res.cloudinary.com/dqsrkjnvg/image/upload/v1748196929/urbandrives/cars/1748196929474_images_1.jpg.jpg" alt="Toyota Civic" />
                            <div className="status-badge available">available</div>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <div>
                                    <h3>Honda Civic</h3>
                                    <p className="car-meta">2020 • Black</p>
                                </div>
                                <div className="price">
                                    <span className="price-amount">KES1000</span>
                                    <span className="price-period">/day</span>
                                </div>
                            </div>
                            <p className="description">hsjahsjasasdssas</p>
                            <a href="car-detail.html" className="btn btn-card">View Details</a>
                        </div>
                    </div>

                    <div className="car-card">
                        <div className="card-image-wrapper">
                            <img src="https://res.cloudinary.com/dqsrkjnvg/image/upload/v1748239822/urbandrives/cars/1748239822058_images_1.jpg.jpg" alt="Ford wHATEVER"/>
                            <div className="status-badge available">available</div>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <div>
                                    <h3>Ford wHATEVER</h3>
                                    <p className="car-meta">2023 • Silver</p>
                                </div>
                                <div className="price">
                                    <span className="price-amount">KES9999</span>
                                    <span className="price-period">/day</span>
                                </div>
                            </div>
                            <p className="description">EFDJFHDJF</p>
                            <a href="car-detail.html" className="btn btn-card">View Details</a>
                        </div>
                    </div>

                </div>
            </div>
        </main>
        </div>

        )
    }
export default Cars;