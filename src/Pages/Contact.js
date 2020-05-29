import React, { Component } from 'react'
import { contactLink } from "../Links";
import "./Contact.scss"

export class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <iframe title="Contact form" allowTransparency="true" id="contactform123" name="contactform123" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src={contactLink} className="Contact__form"><p>Your browser does not support iframes. The contact form cannot be displayed. Please use another contact method (phone, fax etc)</p></iframe>
            </div>
        )
    }
}

export default Contact
