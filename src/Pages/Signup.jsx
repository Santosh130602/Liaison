
// import React, { useState } from 'react';
// import ImgLogin from '../accest/loginImg.png';
// import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Importing icons
// import Header from '../component/Header';
// import Footer from '../component/Footer';
// import axios from 'axios';
// // import { useGoogleLogin } from '@react-oauth/google';
// // import { useFacebookLogin } from '@react-oauth/facebook';

// const Signup = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSignupClick = () => {
//         // Redirect to login page logic
//         window.location.href = '/login';
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Validate form data here if needed
//         try {
//             const response = await axios.post('http://localhost4000/api/v1/auth/signup', formData);
//             console.log(response.data); // Handle response as needed
//         } catch (error) {
//             console.error('Error during signup:', error);
//         }
//     };

//     // const googleLogin = useGoogleLogin({
//     //     onSuccess: async (tokenResponse) => {
//     //         try {
//     //             const response = await axios.post('http://your-backend-endpoint.com/google-signup', { token: tokenResponse.access_token });
//     //             console.log(response.data); // Handle response as needed
//     //         } catch (error) {
//     //             console.error('Error during Google signup:', error);
//     //         }
//     //     },
//     //     onError: (error) => console.error('Google login error:', error)
//     // });

//     // const facebookLogin = useFacebookLogin({
//     //     onSuccess: async (tokenResponse) => {
//     //         try {
//     //             const response = await axios.post('http://your-backend-endpoint.com/facebook-signup', { token: tokenResponse.access_token });
//     //             console.log(response.data); // Handle response as needed
//     //         } catch (error) {
//     //             console.error('Error during Facebook signup:', error);
//     //         }
//     //     },
//     //     onError: (error) => console.error('Facebook login error:', error)
//     // });

//     return (
//         <>
//             <Header />
//             <div className="login-container">
//                 <div className='left-login'>
//                     <h2 className='login-headheading'>Signup</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-row">
//                             <div className="form-group">
//                                 <label htmlFor="firstName">First Name:</label>
//                                 <input
//                                     type="text"
//                                     id="firstName"
//                                     name="firstName"
//                                     value={formData.firstName}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="lastName">Last Name:</label>
//                                 <input
//                                     type="text"
//                                     id="lastName"
//                                     name="lastName"
//                                     value={formData.lastName}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group form-group-2">
//                                 <label htmlFor="email">Email:</label>
//                                 <input
//                                     type="email"
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
//                             <div className="form-group form-group-2">
//                                 <label htmlFor="confirmPassword">Confirm Password:</label>
//                                 <input
//                                     type="password"
//                                     id="confirmPassword"
//                                     name="confirmPassword"
//                                     value={formData.confirmPassword}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <button className='search-btn' type="submit">Signup</button>
//                     </form>
//                     {/* <div className="login-with">
//                         <p>Signup with:</p>
//                         <div className="login-with-btn">
//                             <button className="social-login-btn google" onClick={googleLogin}><FaGoogle /> &nbsp; Google</button>
//                             <button className="social-login-btn facebook" onClick={facebookLogin}><FaFacebook /> &nbsp; Facebook</button>
//                         </div>
//                     </div> */}
//                     <div className="signup-section">
//                         <p>Do you have an account yet? <span className="signup-link" onClick={handleSignupClick}>Login</span></p>
//                     </div>
//                 </div>
//                 <div className='right-login'>
//                     <img src={ImgLogin} alt='Hero-Image' />
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Signup;












import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
// import { sendOtp } from "../../../services/operations/authAPI"
import { sendOtp } from "../services/authAPI"
import { setSignupData } from "../slices/authSlice"
// import { ACCOUNT_TYPE } from "../../../utils/constants"
// import Tab from "../../common/Tab"
import {setProgress} from "../slices/loadingBarSlice"

function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // student or instructor
//   const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
      accountType,
    }

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.STUDENT)
  }

  // data to pass to Tab component
//   const tabData = [
//     {
//       id: 1,
//       tabName: "Student",
//       type: ACCOUNT_TYPE.STUDENT,
//     },
//     {
//       id: 2,
//       tabName: "Instructor",
//       type: ACCOUNT_TYPE.INSTRUCTOR,
//     },
//   ]

  return (
    <div>
      {/* Tab */}
      {/* <Tab tabData={tabData} field={accountType} setField={setAccountType} /> */}
      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit" onClick={()=>{dispatch(setProgress(60))}}
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm