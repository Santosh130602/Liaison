
import React, { useState } from 'react';
import './Contact.css';
import Header from '../component/Header';
import Footer from '../component/Footer';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
  };

  return (<>
    <Header/>

    <div className='contact'>


      <div className="contact-wrapper">

        <h1 className='contact-heading'>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className='contact-form-group1'>

            <div className="contact-form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                />
            </div>
            <div className="contact-form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />
            </div>
          </div>

          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
    <Footer/>
              </>
  );
};

export default ContactUs;
