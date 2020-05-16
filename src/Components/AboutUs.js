import React from 'react'
import "./AboutUs.scss"
import { ReactComponent as SubmitIcon} from "../Assets/Icons/cloud-upload.svg";
import { ReactComponent as EditIcon} from "../Assets/Icons/scissors.svg";
import { ReactComponent as UploadIcon} from "../Assets/Icons/youtube.svg";
import ProcessItem from './ProcessItem';

const AboutUs = () => {
    return (
        <div className="AboutUs">
            <div className="AboutUs__wrapper">
                <h1>ABOUT US</h1>
                <img src={require("../Assets/Images/Logo.png")} alt="logo" className="AboutUs__logo"/>
                <div className="AboutUs__introduction">
                    <p>Taksnoy Gaming is a community of gamers who record their game highlights and participate in each video. Our channel will upload various types of videos (tutorials, comments, interesting moments, etc.). </p>
                    <p>Our goal is to publish more and more high-quality unique original videos, and complete them through a careful editing process. Each video takes several hours or even tens of hours to complete. We hope to bring joy to the audience through each work.</p>
                    {/* <p>We are proud of what we do, which makes Taksnoy Gaming unique among other gaming channels.</p> */}
                </div>

                <div className="AboutUs__process">
                    <ProcessItem icon={<SubmitIcon fill="white" className="AboutUs__process-icon"/>}
                        title="1. Submit"
                        text="You submit video clips through our website"    
                    />

                    <ProcessItem icon={<EditIcon fill="white" className="AboutUs__process-icon"/>}
                        title="2. Edit"
                        text="We will review the clip and start editing within a week"    
                    />

                    <ProcessItem icon={<UploadIcon fill="white" className="AboutUs__process-icon"/>}
                        title="3. Upload"
                        text="We will upload the video on youtube and social media"    
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
