import React from 'react'
import './PopularUploads.scss'
import {ReactComponent as UploadIcon} from "../Assets/Icons/upload.svg";
import Button from './Button';
import { uploadLink, youtubeVideoLink } from '../Constants';

const PopularUploads = () => {
    return (
        <div className="PopularUploads">
            <h1>POPULAR UPLOADS</h1>
            <div className="PopularUploads__video-box">
                {
                    youtubeVideoLink.map( (video) =>{
                        return <iframe src={video} key={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fs;" allowFullScreen="allowfullscreen" className="PopularUploads__video"></iframe>
                    })
                }
           </div>
            <Button link={uploadLink} icon={<UploadIcon/>} text="Upload Yours"/>
        </div>
    )
}

export default PopularUploads;
