import React from 'react'
import './Challenge.scss'
import backdrop from '../Images/Coding-Challenge-Image.png'


export default function Challenge() {
    return (
        <div className="challenge-container">
            <div className="title-container">
                <h1 className="title">Explore</h1>
            </div>
            <div className="flex h-100 w-100">
                <img src={backdrop}  alt="sun through trees" className="trees"/>
            </div>
            <nav className=" bg-dark col-md-4">
                <div className="sidebar">
                </div>
            </nav>
        </div>
    )
}
