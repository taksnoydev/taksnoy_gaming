import React from 'react'
import "./Footer.scss";
import {ReactComponent as YoutubeIcon} from "../Assets/Icons/youtube.svg";
import {ReactComponent as InstagramIcon} from "../Assets/Icons/instagram.svg";
import {youtubeLink, instagramLink, uploadLink} from "../Links";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__information">
                <a href="/">Home</a>
                <a href={uploadLink} target="_blank" rel="noopener noreferrer">Upload</a>
                <a href="/contact">Contact</a>
                <a href="/terms">Terms</a>
                <a href="/privacy">Privacy</a>
            </div>
            <div className="Footer__social-media">
                <a href={youtubeLink} target="_blank" rel="noopener noreferrer"><YoutubeIcon/></a>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
            </div>
            <p>Taksnoy Gaming &copy; 2020</p>
            <a href="https://www.supercell.com/fan-content-policy." target="_blank" rel="noopener noreferrer">
            <p>Brawl Stars is a registered trademark of Supercell. This website is unofficial and is not endorsed by Supercell. Images used with permission under Supercell's Fan Content Policy. For more information see Supercell's Fan Content Policy: www.supercell.com/fan-content-policy.</p>
            </a>

            
        </div>
    )
}

export default Footer
