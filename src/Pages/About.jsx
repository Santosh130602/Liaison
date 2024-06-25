import React from "react";
import HeroImg from "../accest/mainImg.jpeg"
import Header from "../component/Header";
import Footer from "../component/Footer";
import "./About.css"


const About = () => {
    return (
        <>
            <Header />
            <div className="About">
                <div className='left-about'>
                    <h2 className='headheading'>About</h2>
                    <p className="about-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia quibusdam ex consectetur perspiciatis pariatur ullam, ad nostrum, ab minima molestias laboriosam dolorum iure explicabo nesciunt corporis, est ratione sed. Recusandae vero incidunt tempore necessitatibus architecto, enim autem beatae atque temporibus deserunt. Eaque voluptatibus consequatur et quis, esse earum quas ad quidem suscipit repellendus distinctio, eius at, quaerat sapiente assumenda perspiciatis aperiam ducimus. Facere quidem nesciunt assumenda dolores deserunt ratione corporis totam hic ipsam dicta obcaecati officia illum quasi tempore doloremque adipisci, delectus necessitatibus accusantium repellat quisquam cum nemo odio sunt dolor. Quaerat et, saepe laudantium itaque corporis, numquam provident, in facilis omnis soluta officia earum id ullam labore! Minus tempore quis nisi repudiandae ad perferendis maiores quisquam non dolores!</p>
                </div>

                <div className='right-about'>
                    <img src={HeroImg} alt='Hero-Image' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About