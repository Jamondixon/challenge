import React from 'react'
import './Challenge.scss'
import plus from '../Images/Plus.png'
import instagram from '../Images/Instagram.png'
import facebook from '../Images/Facebook.png'

export default function Challenge() {
    return (
        <div className="challenge-container">
            <div className="title-container">
                <h1 className="text-white">Explore</h1>
            </div>
            <div className="sidebar w-25">
            <p className="text-white">More Details</p>
            <img src={plus} alt="plus sign" className="plus-icon"/>
            <img src={facebook} alt="facebook" className="facebook-icon"/>
            <img src={instagram} alt="instagram" className="instagram-icon"/>
            </div>
        </div>
    )
}
