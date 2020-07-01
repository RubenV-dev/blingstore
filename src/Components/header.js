import React from 'react';
import Blingpic from '../images.jpeg';
import { IoLogoInstagram } from "react-icons/io"
import { RiFacebookCircleLine } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
const Banner = () => {
    return (
        <div className='banner'>
            <img src={Blingpic} alt="blingpic"/>
            <div id="head-info"> 
                <p>Buy Your Bling Today!</p>
                <p>Buy 12 and get your 13th peice Free!!</p>
                <p>All purchases subject to shipping fee </p>
                <p>These items are what I currently have in Stock</p>
                <p>
                    <IoLogoInstagram />
                    <RiFacebookCircleLine />
                    <AiOutlineMail />
                </p>
            </div>
            
        </div>
    )
}

export default Banner;