import { Google } from "@ridemountainpig/svgl-react";
import  "./auth.css";
const SignIn = () => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <a href="index.html">
                        <img src="https://raw.githubusercontent.com/kelvinwambua/urbandrives/main/web/public/Logo_With_Text.png" alt="Urban Drives Logo" className="auth-logo"/>
                </a>
                <h2>Welcome back</h2>
                <p>Enter your credentials to access your account</p>
            </div>
            <div class="auth-content">
                <form class="auth-form">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <div class="input-with-icon">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>
                            <input type="email" id="email" placeholder="you@example.com"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="label-row">
                            <label for="password">Password</label>
                            <a href="#" class="form-link">Forgot password?</a>
                        </div>
                        <div class="input-with-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            <input type="password" id="password" placeholder="Enter your password"/>
                        </div>
                    </div>
                    <button type="submit" class="btn-auth">Sign in</button>
                </form>
                <div class="separator">Or continue with</div>
                <button type="button" class="btn-social">
                     <Google  style={{ marginRight: "0.5rem",  width: "18px", height: "18px" }} />
                    <span>Google</span>
                </button>
                <div class="auth-footer">
                    Don't have an account? <a href="signup.html" class="form-link">Sign up</a>
                </div>
            </div>
        </div>
        <p class="copyright">&copy; 2025 Urban Drives. All rights reserved.</p>
    </div>
)}
export default SignIn;