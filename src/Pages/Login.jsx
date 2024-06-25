// import React, { useState } from 'react';
// import ImgLogin from '../accest/loginImg.png';
// import './Login.css';
// import { FaGoogle, FaFacebook } from 'react-icons/fa';
// import Header from '../component/Header';
// import Footer from '../component/Footer';
// import axios from 'axios';
// import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
// import FacebookLogin from 'react-facebook-login';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSignupClick = () => {
//         window.location.href = '/signup';
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://your-backend-endpoint.com/login', formData);
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error during login:', error);
//         }
//     };

//     const responseGoogle = async (response) => {
//         try {
//             const res = await axios.post('http://your-backend-endpoint.com/google-login', { token: response.credential });
//             console.log(res.data);
//         } catch (error) {
//             console.error('Error during Google login:', error);
//         }
//     };

//     const responseFacebook = async (response) => {
//         try {
//             const res = await axios.post('http://your-backend-endpoint.com/facebook-login', { token: response.accessToken });
//             console.log(res.data);
//         } catch (error) {
//             console.error('Error during Facebook login:', error);
//         }
//     };

//     return (
//         <>
//             <Header />
//             <div className="login-container">
//                 <div className='left-login'>
//                     <h2 className='login-headheading'>Login</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-row">
//                             <div className="form-group form-group-2">
//                                 <label htmlFor="email">Email:</label>
//                                 <input
//                                     type="text"
//                                     id="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group form-group-2">
//                                 <label htmlFor="password">Password:</label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <a href="#" className="forgot-password">Forgot Password?</a>
//                         </div>
//                         <button className='login-btn' type="submit">Login</button>
//                     </form>
//                     <div className="login-with">
//                         <p>Login with:</p>
//                         <div className="login-with-btn">
//                             <GoogleLogin
//                                 onSuccess={responseGoogle}
//                                 onFailure={(error) => console.error('Google login error:', error)}
//                                 render={renderProps => (
//                                     <button className="social-login-btn google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
//                                         <FaGoogle /> &nbsp; Google
//                                     </button>
//                                 )}
//                             />
//                             <FacebookLogin
//                                 appId="YOUR_FACEBOOK_APP_ID"
//                                 autoLoad={false}
//                                 fields="name,email,picture"
//                                 callback={responseFacebook}
//                                 render={renderProps => (
//                                     <button className="social-login-btn facebook" onClick={renderProps.onClick}>
//                                         <FaFacebook /> &nbsp; Facebook
//                                     </button>
//                                 )}
//                             />
//                         </div>
//                     </div>
//                     <div className="signup-section">
//                         <p>Don't have an account yet? <span className="signup-link" onClick={handleSignupClick}>Sign up</span></p>
//                     </div>
//                 </div>
//                 <div className='right-login'>
//                     <img src={ImgLogin} alt='Hero-Image' />
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default Login;








import React, { useState } from 'react';
import ImgLogin from '../accest/loginImg.png';
import './Login.css';
// import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Header from '../component/Header';
import Footer from '../component/Footer';
import axios from 'axios';
// import { GoogleLogin } from '@react-oauth/google';
// import {FacebookLogin} from 'react-facebook-login';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignupClick = () => {
        window.location.href = '/signup';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://your-backend-endpoint.com/login', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    // const responseGoogle = async (response) => {
    //     try {
    //         const res = await axios.post('http://your-backend-endpoint.com/google-login', { token: response.credential });
    //         console.log(res.data);
    //     } catch (error) {
    //         console.error('Error during Google login:', error);
    //     }
    // };

    // const responseFacebook = async (response) => {
    //     try {
    //         const res = await axios.post('http://your-backend-endpoint.com/facebook-login', { token: response.accessToken });
    //         console.log(res.data);
    //     } catch (error) {
    //         console.error('Error during Facebook login:', error);
    //     }
    // };

    return (
        <>
            <Header />
            <div className="login-container">
                <div className='left-login'>
                    <h2 className='login-headheading'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group form-group-2">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group form-group-2">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </div>
                        <button className='login-btn' type="submit">Login</button>
                    </form>
                    {/* <div className="login-with">
                        <p>Login with:</p>
                        <div className="login-with-btn">
                            <GoogleLogin
                                onSuccess={responseGoogle}
                                onError={(error) => console.error('Google login error:', error)}
                                render={(renderProps) => (
                                    <button className="social-login-btn google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        <FaGoogle /> &nbsp; Google
                                    </button>
                                )}
                            />
                            <FacebookLogin
                                appId="YOUR_FACEBOOK_APP_ID"
                                autoLoad={false}
                                fields="name,email,picture"
                                callback={responseFacebook}
                                render={(renderProps) => (
                                    <button className="social-login-btn facebook" onClick={renderProps.onClick}>
                                        <FaFacebook /> &nbsp; Facebook
                                    </button>
                                )}
                            />
                        </div>
                    </div> */}
                    <div className="signup-section">
                        <p>Don't have an account yet? <span className="signup-link" onClick={handleSignupClick}>Sign up</span></p>
                    </div>
                </div>
                <div className='right-login'>
                    <img src={ImgLogin} alt='Hero-Image' />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
