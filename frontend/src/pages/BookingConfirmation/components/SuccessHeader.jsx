import { CircleCheckBig } from "lucide-react";

export default function SuccessHeader() {
    return (
        <div className="success-header">
            <div className="icon-wrapper">
                <CircleCheckBig />
            </div>
            <h1>Booking Confirmed!</h1>
            <p>Your rental has been successfully booked. We've sent a confirmation email to your address.</p>
        </div>
    );
}