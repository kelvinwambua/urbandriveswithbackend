import "./Navbar.css";
export default function Navbar() {
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
}