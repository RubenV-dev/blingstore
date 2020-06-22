import React from 'react';
import Blingpic from '../images.jpeg';

const Banner = () => {
    return (
        <div className='banner'>
            <img src={Blingpic} alt="blingpic"/>
            <div> Buy Your Bling Now!</div>
            <div>Get Your Jennifer Stuff TODAY!</div>
        </div>
    )
}

export default Banner;