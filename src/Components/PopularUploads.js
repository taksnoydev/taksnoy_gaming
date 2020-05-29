import React from 'react'
import './PopularUploads.scss'
import { ReactComponent as YoutubeIcon } from "../Assets/Icons/youtube.svg";
import Button from './Button';
import { youtubeVideoLink, youtubeLink } from "../Links";

const PopularUploads = () => {
    return (
        <div className="PopularUploads">
            <h1>POPULAR UPLOADS</h1>
            <div className="PopularUploads__video-box">
                {
                    youtubeVideoLink.map( (video) =>{
                        return <iframe title={video} src={video} key={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fs;" allowFullScreen="allowfullscreen" className="PopularUploads__video"></iframe>
                    })
                }
           </div>
            <Button link={youtubeLink} icon={<YoutubeIcon fill="var(--color-white)"/>} color="red" text="View More"/>
        </div>
    )
}

export default PopularUploads;
