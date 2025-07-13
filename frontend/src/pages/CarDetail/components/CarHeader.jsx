export default function CarHeader({ car }) {
    return (
        <div className="page-header">
            <div className="container">
                <a href="/cars" className="back-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 19-7-7 7-7"/>
                        <path d="M19 12H5"/>
                    </svg>
                    Back to Cars
                </a>
                <div className="header-content">
                    <div>
                        <h1>{car.make} {car.model}</h1>
                        <p>{car.year} • {car.title} • Location: {car.location}</p>
                    </div>
                    <div className="status-badge available">available</div>
                </div>
            </div>
        </div>
    );
}