import React from 'react'
import './PopularUploads.scss'
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
           <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="PopularUploads__viewmore">
                <p>View More</p>
                &rarr;
           </a>
        </div>
    )
}

export default PopularUploads;
