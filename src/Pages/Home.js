import React, { Component } from 'react'
import Header from "../Components/Header";
import PopularUploads from '../Components/PopularUploads';
import AboutUs from '../Components/AboutUs';
import Prompt from '../Components/Prompt';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <PopularUploads/>
                <AboutUs/>
                <Prompt/>
            </div>
        )
    }
}

export default Home
