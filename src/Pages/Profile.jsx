// // import React from 'react';

// // const Profile = () => {
// //   return (
// //     <>
// //     </>
// //   );
// // };

// // export default Profile;


// // src/Profile.js
// import React, { useState } from 'react';
// import './Profile.css';

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     phone: '123-456-7890',
//     address: '123 Main St, Anytown, USA'
//   });

//   const [editableUser, setEditableUser] = useState({ ...user });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditableUser({ ...editableUser, [name]: value });
//   };

//   const handleSave = () => {
//     setUser({ ...editableUser });
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <img
//           src="https://via.placeholder.com/150"
//           alt="User"
//           className="profile-image"
//         />
//         <h2>{user.name}</h2>
//       </div>
//       <div className="profile-details">
//         <div className="profile-field">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={editableUser.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="profile-field">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={editableUser.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="profile-field">
//           <label>Phone:</label>
//           <input
//             type="text"
//             name="phone"
//             value={editableUser.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="profile-field">
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={editableUser.address}
//             onChange={handleChange}
//           />
//         </div>
//         <button onClick={handleSave}>Save</button>
//       </div>
//     </div>
//   );
// };

// export default Profile;








// // src/Profile.js
// import React, { useState } from 'react';
// import './Profile.css';

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     phone: '123-456-7890',
//     address: '123 Main St, Anytown, USA',
//     educationLevel: 'Bachelor\'s',
//     passingYear: '2022',
//     collegeName: 'Example University',
//     degree: 'Computer Science',
//     stateName: 'California',
//     districtName: 'San Francisco',
//     otherDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//   });

//   const [editableUser, setEditableUser] = useState({ ...user });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditableUser({ ...editableUser, [name]: value });
//   };

//   const handleSave = () => {
//     setUser({ ...editableUser });
//   };

//   const handleEditPhoto = () => {
//     // Implement photo editing functionality here
//     alert('Edit photo functionality');
//   };

//   const handleEditName = () => {
//     // Implement name editing functionality here
//     alert('Edit name functionality');
//   };

//   const handleDropdownChange = (e) => {
//     // Handle dropdown selection here
//     const option = e.target.value;
//     alert(`Selected option: ${option}`);
//   };

//   return (
//     <div className="profile-container">
//       <div className="left-panel">
//         <select onChange={handleDropdownChange}>
//           <option value="">Select an option</option>
//           <option value="home">Home</option>
//           <option value="search">Search</option>
//           <option value="notification">Notification</option>
//           <option value="message">Message</option>
//           <option value="changePassword">Change Password</option>
//           <option value="logout">Logout</option>
//         </select>
//       </div>
//       <div className="right-panel">
//         <div className="profile-header">
//           <img
//             src="https://via.placeholder.com/150"
//             alt="User"
//             className="profile-image"
//           />
//           <div className="edit-photo" onClick={handleEditPhoto}>
//             Edit Photo
//           </div>
//           <h2 className="profile-name" onClick={handleEditName}>
//             {user.name}
//           </h2>
//           <div className="edit-name" onClick={handleEditName}>
//             Edit Name
//           </div>
//         </div>
//         <div className="profile-details">
//           <div className="profile-field">
//             <label>Education Level:</label>
//             <input
//               type="text"
//               name="educationLevel"
//               value={editableUser.educationLevel}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="profile-field">
//             <label>Passing Year:</label>
//             <input
//               type="text"
//               name="passingYear"
//               value={editableUser.passingYear}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="profile-field">
//             <label>College Name:</label>
//             <input
//               type="text"
//               name="collegeName"
//               value={editableUser.collegeName}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="profile-field">
//             <label>Degree:</label>
//             <input
//               type="text"
//               name="degree"
//               value={editableUser.degree}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="profile-field">
//             <label>State Name:</label>
//             <input
//               type="text"
//               name="stateName"
//               value={editableUser.stateName}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="profile-field">
//             <label>District Name:</label>
//             <input
//               type="text"
//               name="districtName"
//               value={editableUser.districtName}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="profile-field">
//             <label>Other Details:</label>
//             <textarea
//               name="otherDetails"
//               value={editableUser.otherDetails}
//               onChange={handleChange}
//               rows="4"
//             ></textarea>
//           </div>
//           <button onClick={handleSave}>Save</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;







// src/Profile.js
import React, { useState } from 'react';
import { BiHomeAlt } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
// import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineNotificationsNone } from "react-icons/md";
// import { FiBookmark } from "react-icons/fi";
import { TbMessageCircle } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
// import { MdOutlineModeEditOutline } from "react-icons/md";
import ProLogo from "../accest/sant.png"
import './Profile.css';

const Profile = () => {
    const [user, setUser] = useState({
        name: 'User Name',
        email: '',
        phone: '',
        address: '',
        educationLevel: '',
        passingYear: '',
        collegeName: '',
        degree: '',
        stateName: '',
        districtName: '',
        otherDetails: ''
    });

    const [editableUser, setEditableUser] = useState({ ...user });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableUser({ ...editableUser, [name]: value });
    };

    const handleSave = () => {
        setUser({ ...editableUser });
    };

    const handleEditPhoto = () => {
        // Implement photo editing functionality here
        alert('Edit photo functionality');
    };

    const handleEditName = () => {
        // Implement name editing functionality here
        alert('Edit name functionality');
    };

    const handleItemClick = (action) => {
        switch (action) {
            case 'home':
                alert('Navigate to Home');
                break;
            case 'search':
                alert('Navigate to Search');
                break;
            case 'notification':
                alert('Show Notifications');
                break;
            case 'message':
                alert('Show Messages');
                break;
            case 'changePassword':
                alert('Change Password');
                break;
            case 'logout':
                alert('Logout');
                break;
            default:
                break;
        }
    };

    return (
        <div className="profile-container">
            <div className="left-panel">
                <ul className="functionality-list">
                    <li className='functionality-list-item' onClick={() => handleItemClick('home')}> <BiHomeAlt className="icon-size"/>  &nbsp;  Home</li>
                    <li className='functionality-list-item' onClick={() => handleItemClick('search')}> <IoSearchSharp className="icon-size" />  &nbsp;  Search</li>
                    <li className='functionality-list-item' onClick={() => handleItemClick('notification')}> <MdOutlineNotificationsNone className="icon-size" />  &nbsp;  Notification</li>
                    <li className='functionality-list-item' onClick={() => handleItemClick('message')}> <TbMessageCircle  className="icon-size" />  &nbsp;  Message</li>
                    <li className='functionality-list-item' onClick={() => handleItemClick('changePassword')}> &nbsp;  Change Password</li>
                    <li className='functionality-list-item' onClick={() => handleItemClick('logout')}><TbLogout className="icon-size" />  &nbsp;  Logout</li>
                </ul>
            </div>
            <div className="right-panel">
                <div className="profile-header">
                    <div className='profile-header-left'>
                        <img
                            src={ProLogo}
                            alt="User"
                            className="profile-image"
                        />
                        <div className="edit-photo" onClick={handleEditPhoto}>
                            Edit Photo
                        </div>
                    </div>
                    <div className='profile-header-right'>
                        <h2 className="profile-name" onClick={handleEditName}>
                            {user.name} 
                        </h2>
                        <div className="edit-name" onClick={handleEditName}>
                            Edit Name 
                        </div>
                    </div>
                </div>
                <div className="profile-details">
                    <div className="profile-field">
                        <label>Education Level:</label>
                        <input
                            type="text"
                            name="educationLevel"
                            placeholder='Education Level'
                            value={editableUser.educationLevel}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="profile-field">
                        <label>Passing Year:</label>
                        <input
                            type="text"
                            name="passingYear"
                            placeholder='Passing Year'
                            value={editableUser.passingYear}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="profile-field">
                        <label>College Name:</label>
                        <input
                            type="text"
                            name="collegeName"
                            placeholder='College Name'
                            value={editableUser.collegeName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="profile-field">
                        <label>Degree:</label>
                        <input
                            type="text"
                            name="degree"
                            placeholder='Degree'
                            value={editableUser.degree}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="profile-field">
                        <label>State Name:</label>
                        <input
                            type="text"
                            name="stateName"
                            placeholder='State Name'
                            value={editableUser.stateName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="profile-field">
                        <label>District Name:</label>
                        <input
                            type="text"
                            name="districtName"
                            placeholder='Distic'
                            value={editableUser.districtName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="profile-field">
                        <label>Other Details:</label>
                        <textarea
                            name="otherDetails"
                            value={editableUser.otherDetails}
                            onChange={handleChange}
                            rows="4"
                        ></textarea>
                    </div>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
