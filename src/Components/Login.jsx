// redirect to home page

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Log.css'; 

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleLogInClick = () => {
        setIsSignUp(false);
    };

   

    return (
        <div className='log-body'>
        <div className="background"></div>
        <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
            <div className="form-container sign-up-container">
                <form action="home.html">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Create Username" />
                    <input type="password" placeholder="Create Password" />
                    {/* <button>Sign Up</button> */}
                    <Link to="/"> {/* Use Link to navigate to home page */}
                        <button>Sign Up</button>
                    </Link>
                </form>
            </div>
            <div className="form-container log-in-container">
                <form action="home.html">
                    <h1>Log in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    
                    {/* <button>Log In</button>  */}

                    <Link to="/"> {/* Use Link to navigate to home page */}
                        <button>Log In</button>
                    </Link>
                </form>


            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <img src="newlogo.png" alt="logo" />
                        <h1>Welcome Back!</h1>
                        <p>Get ready to explore the beauty of India!</p>
                        <button className="ghost" onClick={handleLogInClick}>Log In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <img src="newlogo.png" alt="logo" />
                        <h1>Hello, There!</h1>
                        <p>Don't have an account? Sign Up for free</p>
                        <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;










// user validation


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/css/Log.css'; 

// const Login = () => {
//     const [isSignUp, setIsSignUp] = useState(false);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSignUpClick = () => {
//         setIsSignUp(true);
//     };

//     const handleLogInClick = () => {
//         setIsSignUp(false);
//     };

//     const validateForm = () => {
//         if (username.length < 4) {
//             alert('Username must be at least 4 characters long.');
//             return false;
//         }

//         if (password.length < 4 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//             if (password.length < 4) {
//                 alert('Password must be at least 4 characters long.');
//             } else {
//                 alert('Password must contain at least one special character (@, #, etc).');
//             }
//             return false;
//         }
//         return true;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (validateForm()) {
//             // Proceed with form submission
//             console.log('Form submitted successfully!');
//         }
//     };

//     return (
//         <div className='log-body'>
//             <div className="background"></div>
//             <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
//                 {/* Sign Up Form */}
//                 <div className="form-container sign-up-container">
//                     <form onSubmit={handleSubmit}>
//                         <h1>Create Account</h1>
//                         <input type="text" placeholder="Name" />
//                      <input type="email" placeholder="Email" />
//                         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//                         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                         <button type="submit">Sign Up</button>
//                     </form>
//                 </div>
                
//                 {/* Log In Form */}
//                 <div className="form-container log-in-container">
//                     <form onSubmit={handleSubmit}>
//                         <h1>Log in</h1>
//                         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//                         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                         <a href="#">Forgot your password?</a>
//                         <button type="submit">Log In</button>
                        
//                     </form>
//                 </div>

//                 {/* Overlay */}
//                 <div className="overlay-container">
//                     <div className="overlay">
//                         <div className="overlay-panel overlay-left">
//                             <img src="newlogo.png" alt="logo" />
//                             <h1>Welcome Back!</h1>
//                             <p>Get ready to explore the beauty of India!</p>
//                             <button className="ghost" onClick={handleLogInClick}>Log In</button>
//                         </div>
//                         <div className="overlay-panel overlay-right">
//                             <img src="newlogo.png" alt="logo" />
//                             <h1>Hello, There!</h1>
//                             <p>Don't have an account? Sign Up for free</p>
//                             <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;








// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import '../assets/css/Log.css';

// const Login = () => {
//     const [isSignUp, setIsSignUp] = useState(false);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const history = useHistory();

//     const handleSignUpClick = () => {
//         setIsSignUp(true);
//     };

//     const handleLogInClick = () => {
//         setIsSignUp(false);
//     };

//     const validateForm = () => {
//         if (username.length < 4) {
//             alert('Username must be at least 4 characters long.');
//             return false;
//         }

//         if (password.length < 4 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//             if (password.length < 4) {
//                 alert('Password must be at least 4 characters long.');
//             } else {
//                 alert('Password must contain at least one special character (@, #, etc).');
//             }
//             return false;
//         }
//         return true;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (validateForm()) {
//             // Proceed with form submission
//             console.log('Form submitted successfully!');
//             // Redirect to home page
//             history.push('/');
//         }
//     };

//     return (
//         <div className='log-body'>
//             <div className="background"></div>
//             <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
//                 {/* Sign Up Form */}
//                 <div className="form-container sign-up-container">
//                     <form onSubmit={handleSubmit}>
//                         <h1>Create Account</h1>
//                         <input type="text" placeholder="Name" />
//                         <input type="email" placeholder="Email" />
//                         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//                         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                         <button type="submit">Sign Up</button>
//                     </form>
//                 </div>
                
//                 {/* Log In Form */}
//                 <div className="form-container log-in-container">
//                     <form onSubmit={handleSubmit}>
//                         <h1>Log in</h1>
//                         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//                         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                         <a href="#">Forgot your password?</a>
//                         <button type="submit">Log In</button>
//                     </form>
//                 </div>

//                 {/* Overlay */}
//                 <div className="overlay-container">
//                     <div className="overlay">
//                         <div className="overlay-panel overlay-left">
//                             <img src="newlogo.png" alt="logo" />
//                             <h1>Welcome Back!</h1>
//                             <p>Get ready to explore the beauty of India!</p>
//                             <button className="ghost" onClick={handleLogInClick}>Log In</button>
//                         </div>
//                         <div className="overlay-panel overlay-right">
//                             <img src="newlogo.png" alt="logo" />
//                             <h1>Hello, There!</h1>
//                             <p>Don't have an account? Sign Up for free</p>
//                             <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;




