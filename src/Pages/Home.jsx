
import React from 'react';
import './Home.css';
import HeroImg from "../accest/mainImg.jpeg"; // Ensure the path is correct
import Header from '../component/Header';
import Footer from '../component/Footer';


const Home = () => {
  return (
    <>
   <Header/>
    <div className="home">
      <div className='left-home'>
        <img src={HeroImg} alt='Hero-Image' />
      </div>
      <div className='right-home'>
        <h2 className='headheading'>Find Your Friend</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input type="text" id="country" name="country" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input type="text" id="state" name="state" />
            </div>
            <div className="form-group">
              <label htmlFor="district">District:</label>
              <input type="text" id="district" name="district" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="education">Education:</label>
              <input type="text" id="education" name="education" />
            </div>
            <div className="form-group">
              <label htmlFor="passing-year">Passing Year:</label>
              <input type="text" id="passing-year" name="passing-year" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group form-group-2">
              <label htmlFor="school-college">School/College Name:</label>
              <input type="text" id="school-college" name="school-college" />
            </div>
          </div>
          <button className='search-btn' type="submit">Search</button>
        </form>
      </div>
    </div>
   
    <Footer/>
    </>
  );
};

export default Home;
