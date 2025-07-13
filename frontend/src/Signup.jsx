import { Google } from "@ridemountainpig/svgl-react";
const SignUp = () => {
    return (
        <>
        <div class="auth-container">
        <div class="auth-card">
            <div class="auth-header">
                 <a href="index.html">
                    <img src="https://raw.githubusercontent.com/kelvinwambua/urbandrives/main/web/public/Logo_With_Text.png" alt="Urban Drives Logo" class="auth-logo"/>
                </a>
                <h2>Create your account</h2>
                <p>Join Urban Drives and start your journey!</p>
            </div>
            <div class="auth-content">
                <form class="auth-form">
                     <div class="form-group">
                        <label for="name">Full Name</label>
                        <div class="input-with-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="4"/><path d="M12 16c-2.2 0-4 1.8-4 4"/></svg>
                            <input type="text" id="name" placeholder="Jane Doe"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <div class="input-with-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>
                            <input type="email" id="email" placeholder="you@example.com"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <div class="input-with-icon">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            <input type="password" id="password" placeholder="Create a strong password"/>
                        </div>
                    </div>
                     <div class="form-group">
                        <label for="confirm-password">Confirm Password</label>
                        <div class="input-with-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            <input type="password" id="confirm-password" placeholder="Confirm your password"/>
                        </div>
                    </div>
                    <button type="submit" class="btn-auth">Create account</button>
                </form>
                <div class="separator">Or continue with</div>
                <button type="button" class="btn-social">
            <Google  style={{ marginRight: "0.5rem",  width: "18px", height: "18px" }} />
                    <span>Sign up with Google</span>
                </button>
                <div class="auth-footer">
                    Already have an account? <a href="signin.html" class="form-link">Sign in</a>
                </div>
            </div>
        </div>
         <p class="copyright">&copy; 2025 Urban Drives. All rights reserved.</p>
    </div>
    </>
)}
export default SignUp;