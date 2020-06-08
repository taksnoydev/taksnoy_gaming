import React from 'react'
import './Header.scss';
import { youtubeLink, uploadLink } from "../Links";
import { ReactComponent as YoutubeIcon } from "../Assets/Icons/youtube.svg";
import { ReactComponent as UploadIcon } from "../Assets/Icons/upload.svg";
import Button from "./Button";


const Header = () => {
    return (
        <div className="Header">
            <div className="Header__wrapper">
                <div className="Header__text">
                    <h1>Taksnoy Gaming</h1>
                    <h2>Hightlight your pro-gamer moves and funny moments.</h2>
                </div>
                <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="Header__button Header__button--youtube">
                    <p>YouTube</p>
                    <YoutubeIcon fill="var(--color-white)"/>
                </a>
                <Button link={uploadLink} icon={<UploadIcon/>} color="amber" text="Upload Video"/>

                <img src={require("../Assets/Images/Spike3.png")} alt="spike" className="Header__brawlers Header__brawlers--spike"/>
                <img src={require("../Assets/Images/Nita1.png")} alt="nita" className="Header__brawlers Header__brawlers--nita"/>
                <img src={require("../Assets/Images/Jessie.png")} alt="jessie" className="Header__brawlers Header__brawlers--jessie"/>
                <img src={require("../Assets/Images/Header.png")} alt="header" className="Header__header"/>
            </div>               
        </div>
    )
}

export default Header
