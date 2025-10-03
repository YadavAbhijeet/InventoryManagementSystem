import right_logo from './../assets/right-logo.png'
import left_logo from './../assets/left-Logo.png'
import Loader from "react-js-loader";
import {useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from './../context/UserContext';

function Login() {

    const [loading, setLoading] = useState(false);
    const { isLoggedIn,  setLoggedIn } = useContext(UserContext);
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call (replace with real login API request)
        setTimeout(() => {
            // alert("Login successful!");
            setLoading(false);
            setLoggedIn(true);
            navigate("/home");
        }, 2000);
        
    };

    return (
        <div className="container">
            
            {loading && (
                <div className="overlay">
                <Loader type="bubble-ping" bgColor={"#004aad"} size={100} />
                </div>
            )}
            
            <div className="header">
                <img className="left-logo" src={left_logo} alt="brand name" />
            </div>


            <div className="main-content">
                <img src={right_logo} alt="logo" className="right-logo" />
                <h1 className="login-text">Log in to your account</h1>
                <p className="welcome-text">Welcome back! Please enter your details.</p>
                <span className="email-label">Email</span>
                <input type="email" placeholder="Enter your email" className="email-input" />
                <p className="password-label">Password</p>
                <input type="password" placeholder="Enter your password" className="password-input" />

                <div className="options">
                    <div className="remember-me">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember for 30 days</label>
                    </div>
                    <p> <a href="#">Forgot password</a></p>
                </div>

                <button className="login-button" onClick={handleLogin}>Sign in</button>
                <p className="signup-prompt">Don't have an account? <a href="#" className="signup-link">Sign Up</a></p>

            </div>
        </div>



    )

}

export default Login;