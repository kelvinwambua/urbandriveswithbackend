import React, { useState } from 'react';
import { Google } from "@ridemountainpig/svgl-react";
import "../../auth.css"; 
import { authClient } from '../../lib/auth-client';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
  let navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        await authClient.signUp.email({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            callbackURL: `${window.location.origin}/cars`
        }, {
            onSuccess: () => {
                toast.success('Sign up successful');
                navigate("/cars");
            },
            onError: (error) => {
                toast.error(`Sign up failed: ${error.message}`);
                console.error('Sign up error:', error);
            }
        });
    
        
        console.log('Sign up form submitted:', formData);
    };

    const handleGoogleSignIn = () => {
        authClient.signIn.social({
            provider: 'google',
            callbackURL: `${window.location.origin}/cars`
        }, {
            onSuccess: () => {
                toast.success('Google sign in successful');
            },
            onError: (error) => {
                toast.error('Google sign in failed');
                console.error('Google sign in error:', error);
            }
        });

        console.log('Google sign in clicked');
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <a href="/">
                            <img 
                                src="https://raw.githubusercontent.com/kelvinwambua/urbandrives/main/web/public/Logo_With_Text.png" 
                                alt="Urban Drives Logo" 
                                className="auth-logo"
                            />
                        </a>
                        <h2>Create your account</h2>
                        <p>Join Urban Drives </p>
                    </div>
                    <div className="auth-content">
                        <form className="auth-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <div className="input-with-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <circle cx="12" cy="10" r="4"/>
                                        <path d="M12 16c-2.2 0-4 1.8-4 4"/>
                                    </svg>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        placeholder="Jane Doe"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-with-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="4"/>
                                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
                                    </svg>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-with-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                    </svg>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        name="password"
                                        placeholder="Create a strong password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className="input-with-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                    </svg>
                                    <input 
                                        type="password" 
                                        id="confirmPassword" 
                                        name="confirmPassword"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn-auth">Create account</button>
                        </form>
                        <div className="separator">Or continue with</div>
                        <button type="button" className="btn-social" onClick={handleGoogleSignIn}>
                            <Google style={{ marginRight: "0.5rem", width: "18px", height: "18px" }} />
                            <span>Sign in with Google</span>
                        </button>
                        <div className="auth-footer">
                            Already have an account? <a href="/signin" className="form-link">Sign in</a>
                        </div>
                    </div>
                </div>
                <p className="copyright">&copy; 2025 Urban Drives. All rights reserved.</p>
            </div>
        </div>
    );
};

export default SignUp;