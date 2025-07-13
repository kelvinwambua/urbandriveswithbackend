import { Calendar } from "lucide-react";

export default function EmptyState() {
    return (
        <div className="empty-state">
            <div className="empty-state-icon">
                <Calendar size={48} />
            </div>
            <h2>No bookings yet</h2>
            <p>You haven't made any car bookings yet. Start exploring our available cars!</p>
            <a href="/" className="btn btn-primary">
                Browse Cars
            </a>
        </div>
    );
}