export default function TotalAmount({ amount }) {
    return (
        <div className="detail-item total-amount">
            <h4>Total Amount</h4>
            <span>{amount}</span>
        </div>
    );
}