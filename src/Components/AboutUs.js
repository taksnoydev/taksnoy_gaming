import React from 'react'
import "./AboutUs.scss"
import { ReactComponent as SubmitIcon} from "../Assets/Icons/cloud-upload.svg";
import { ReactComponent as EditIcon} from "../Assets/Icons/scissors.svg";
import { ReactComponent as YoutubeIcon} from "../Assets/Icons/youtube.svg";
import { ReactComponent as UploadIcon } from "../Assets/Icons/upload.svg";
import { uploadLink } from "../Links";
import Button from "./Button";
import ProcessItem from './ProcessItem';

const processItems = [
    {
        title: "1. Submit",
        text: "You submit video clips through our website",
        icon: <SubmitIcon fill="white" className="AboutUs__process-icon"/>,
    },
    {
        title: "2. Edit",
        text: "We will review the clip and start editing within a week" ,
        icon: <EditIcon fill="white" className="AboutUs__process-icon"/>,
    },
    {
        title: "3. Upload",
        text: "We will upload the video on youtube and social media",
        icon: <YoutubeIcon fill="white" className="AboutUs__process-icon"/>,
    }
]

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
                    {
                        processItems.map(item =>{
                            return <ProcessItem 
                                title={item.title}
                                text={item.text}
                                icon={item.icon}
                                key={item.title}
                            />
                        })
                    }
                </div>

                <Button link={uploadLink} icon={<UploadIcon/>} color="amber" text="Get Started"/>

            </div>
        </div>
    )
}

export default AboutUs
