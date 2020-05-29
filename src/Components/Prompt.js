import React from 'react'
import "./Prompt.scss";
import { ReactComponent as UploadIcon } from "../Assets/Icons/upload.svg";
import { uploadLink }from "../Links";
import Button from "./Button";

const Prompt = () => {
    return (
        <div className="Prompt">
            <img src={require("../Assets/Images/prompt.jpg")} alt = "Share your video" className="Prompt__background"></img>
            <div className="Prompt__wrapper">
                <div className="Prompt__square">
                    <h1>Share Your Video!</h1>
                    <h2>Upload and become the highlight of our next youtube video.</h2>
                    <Button link={uploadLink} icon={<UploadIcon/>} color="amber" text="Upload Now"/>
                </div>
            </div>
        </div>
    )
}

export default Prompt
