import React from 'react';
import Blingpic from '../images.jpeg';

const Banner = () => {
    return (
        <div className='banner'>
            <img src={Blingpic} alt="blingpic"/>
            <div id="head-info"> 
                <p>Buy Your Bling Today!</p>
                <p>Buy 12 and get your 13th peice Free!!</p>
                <p>All purchases subject to shipping fee </p>
            </div>
            
        </div>
    )
}

export default Banner;