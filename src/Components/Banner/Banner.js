import React from 'react';
import { useHistory } from 'react-router-dom';

import BannerItem from './BannerItem/BannerItem';
import './Banner.css'


const Banner = () => {

    const history = useHistory();

    // ----------------------   Handle Buttons On Click     ----------------------- 
    const handleViewPackagesOnClick = () => {
        history.push("/explore");
    }
    const handleViewOffersOnClick = () => {
        history.push("/offers");
    }
    const handleSignUpOnClick = () => {
        history.push("/register");
    }

    return (
        <div >
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        {/*    Banner Item 1    */}
                        <BannerItem
                            background="/banner1-bg.jpg"
                            subtitle="Amazing Watches are Here, Check Out...."
                            title=" 70% Discount on Upcoming Winter Products"
                            description="We will give flat 70% discount on all upcoming winter packages. Please Follow our website for more details."
                            button="Explore All Watches"
                            handleButtonListener={handleViewPackagesOnClick}
                            image=""
                        ></BannerItem>
                    </div>
                    <div className="carousel-item">
                        {/*    Banner Item 2   */}
                        <BannerItem
                            background="/banner2-bg.jpg"
                            subtitle="Amazing Watches are Here, Check Out!!!!"

                            title="50% Discount on Casio Watches!!"
                            description="At the beginning of 2022, We will give 20% discount for all New Arrival of Watches"
                            button="View All Offers"
                            handleButtonListener={handleViewOffersOnClick}
                            image=""
                        ></BannerItem>
                    </div>
                    <div className="carousel-item ">
                        {/*  Banner Item 3     */}
                        <BannerItem
                            background="/banner3-bg.jpg"
                            subtitle="GET THE CHANCE TO WEAR QUALITY WATCHES!!!"
                            title="Become a member of our website and get more offers"
                            description="Sign up today and get special discount and offers for our registered customers"
                            button="Sign Up Now!"
                            handleButtonListener={handleSignUpOnClick}
                            image=""
                        ></BannerItem>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;