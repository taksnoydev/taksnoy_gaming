import React, { Component } from 'react'
import "./Navigation.scss";
import {ReactComponent as YoutubeIcon} from "../Assets/Icons/youtube2.svg";
import {ReactComponent as Menu} from "../Assets/Icons/menu1.svg";
import {ReactComponent as Close} from "../Assets/Icons/minus.svg";
import {youtubeLink, uploadLink} from "../Constants";

export class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = { menuClicked: false};
    }

    menuClickedHander = () =>{
        this.setState({ menuClicked : !this.state.menuClicked});
    }

    render() {
        let menu = <Menu className="Navigation__menu" onClick={()=>{this.menuClickedHander()}}/>;
        if(this.state.menuClicked){
            menu = <Close className="Navigation__menu" onClick={()=>{this.menuClickedHander()}}/>;
        }

        let dropdown = null;
        if(this.state.menuClicked){
            dropdown = 
            <div className="Navigation__dropdown">
                <a href="/"> 
                    <p className="Navigation__dropdown-link">HOME</p> 
                </a>
                
                <a href="/taksnoy_brawlstars/contact"> 
                    <p className="Navigation__dropdown-link">CONTACT</p>
                </a>

                <a href={uploadLink} target="_blank">
                    <p className="Navigation__dropdown-link">UPLOAD</p>
                </a>
                <a href={youtubeLink} target="_blank" >
                    <YoutubeIcon fill="var(--color-blue)" className="Navigation__dropdown-youtube"/>
                </a>
            </div>
        }

        return (
            <div className="Navigation">
                <div className="Navigation__wrapper">
                    <div className="Navigation__logo">
                        <a href="/">
                            <img src={require("../Assets/Images/Logo.png")} alt="logo" className="Navigation__logo-image"/>
                        </a>
                    </div>
                    
                    <a href="/"  className="Navigation__link"> 
                        <p>HOME</p> 
                    </a>
                    
                    <a href="/contact" className="Navigation__link"> 
                        <p >CONTACT</p>
                    </a>

                    <a href={uploadLink} target="_blank" className="Navigation__upload">
                        <p>UPLOAD</p>
                    </a>
                    <a href={youtubeLink} target="_blank" className="Navigation__youtube-icon">
                        <YoutubeIcon fill="var(--color-blue)"/>
                    </a>
                    {menu}
                    {dropdown}
                </div>
            </div>
            
        )
    }
}

export default Navigation
