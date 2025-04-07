import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css'; // Import the CSS file

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA24ZRucNrGS0wJH4Wfxg5yVUr5SKHp4is",
    authDomain: "webp-8ca97.firebaseapp.com",
    projectId: "webp-8ca97",
    storageBucket: "webp-8ca97.appspot.com",
    messagingSenderId: "266995007978",
    appId: "1:266995007978:web:658ca0b1724fc17054b293",
    measurementId: "G-54P1B9B6TD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert('Login successful!');
                window.location.href = `mainpage.html?uid=${user.uid}`; // Redirect to mainpage with UID
            })
            .catch((error) => {
                setError("Error: " + error.message);
            });
    };

    return (
        <div className="page-wrapper">
            <h1 className="fancy-title">Curators Cut</h1>
            <div className="login-background">
                <div className="login-container">
                    <h2>Login</h2>
                    {error && <div className="error-message">{error}</div>}
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="userId">Email:</label>
                            <input
                                type="text"
                                id="userId"
                                name="userId"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                    <a href="signup.html" className="signup-link">Sign Up</a>
                </div>
            </div>
            <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Connect With Us</h3>
                        <p>Follow us on social media for updates and recommendations.</p>
                        <div className="social-links">
                            <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>About Curator's Cut</h3>
                        <p>Your ultimate destination for curated entertainment. We bring you the best movies and TV shows carefully selected by our expert curators.</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Curator's Cut. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Login;