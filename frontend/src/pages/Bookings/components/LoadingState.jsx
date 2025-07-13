export default function LoadingState() {
    return (
        <div>
            <div className="page-header">
                <div className="container">
                    <div className="header-content">
                        <div>
                            <h1>My Bookings</h1>
                            <p>Loading...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ paddingTop: '2rem' }}>
                <div className="loading-skeleton">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="skeleton-card"></div>
                    ))}
                </div>
            </div>
        </div>
    );
}