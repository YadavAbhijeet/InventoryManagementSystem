import right_logo from './../assets/right-logo.png'
import left_logo from './../assets/left-Logo.png'
import Loader from "react-js-loader";
import { useState, useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from './../context/UserContext';
import { loginUser } from './../services/auth';

function Login() {

    const [loading, setLoading] = useState(false);
    const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    const navigate = useNavigate()

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = async (e) => {
        // e.preventDefault();
        setLoading(true);

        // // Simulate API call (replace with real login API request)
        // setTimeout(() => {
        //     // alert("Login successful!");
        //     setLoading(false);
        //     setLoggedIn(true);
        //     navigate("/home");
        // }, 2000);

        console.log("Username:", usernameRef.current.value);
        console.log("Password:", passwordRef.current.value);
        try {
            const resp = await loginUser(usernameRef.current.value, passwordRef.current.value);
            setLoading(false);
            setLoggedIn(true);
            navigate("/home");
        } catch (error) {
            setLoading(false);
            alert(error)
        }

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
                <form action={handleLogin}>
                    <img src={right_logo} alt="logo" className="right-logo" />
                    <h1 className="login-text">Log in to your account</h1>
                    <p className="welcome-text">Welcome back! Please enter your details.</p>
                    <span className="email-label">Email</span>
                    <input type="text" placeholder="Enter your email" ref={usernameRef} name="username" className="email-input" />
                    <p className="password-label">Password</p>
                    <input type="password" placeholder="Enter your password" ref={passwordRef} name="password" className="password-input" />

                    <div className="options">
                        <div className="remember-me">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember for 30 days</label>
                        </div>
                        <p> <a href="#">Forgot password</a></p>
                    </div>

                    <button className="login-button" type="submit">Sign in</button>
                    <p className="signup-prompt">Don't have an account? <a href="#" className="signup-link">Sign Up</a></p>
                </form>
            </div>
        </div>



    )

}

export default Login;