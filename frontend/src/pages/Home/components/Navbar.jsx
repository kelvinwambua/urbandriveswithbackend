import React from 'react';
import { authClient } from '../../../lib/auth-client';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Navbar = () => {

const [user, setUser] = React.useState(null);

 useEffect(() => {
  const fetchUser = async () => {
    try {
      const userData = await authClient.getSession();
      const user = userData.data.user;
      setUser(user);
      console.log('User fetched:', user);
    } catch (error) {
      console.error('Failed to fetch user:', error);
      setUser(null);
    }
  }
  fetchUser();
}, []);

 return (
  <header className="navbar">
    <div className="container">
      <a href="/" className="logo">
        <img
          src="https://raw.githubusercontent.com/kelvinwambua/urbandrives/main/web/public/Logo_With_Text.png"
          alt="Urban Drives Logo"
        />
      </a>
      <nav className="nav-links">
        <a href="#rental-deals">Rental deals</a>
        <a href="#how-it-works">How it works</a>
        <a href="#why-choose-us">Why choose us</a>
      </nav>
      <div className="nav-auth">
        {user ? (
          <div className="user-profile">
            <a href="/car-list" className="btn btn-secondary">List Car</a>
            <img
              src={user.image || 'https://github.com/shadcn.png'}
              alt={user.name || 'User'}
              className="user-avatar"
            />
            <span className="user-name">{user.name}</span>
            <button onClick={async()=> await authClient.signOut({},{
              onSuccess: () => {
                toast.success('Logout successful');
                setUser(null);
              },
              onError: (error) => {
                toast.error('Logout failed');
                console.error('Logout failed:', error);
              }
            })} className="btn btn-ghost">
              Logout
            </button>
          </div>
        ) : (
          <>
            <a href="/signin" className="btn btn-ghost">Sign in</a>
            <a href="/signup" className="btn btn-primary">Sign up</a>
          </>
        )}
      </div>
    </div>
  </header>
);
};

export default Navbar;