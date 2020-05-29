import React from 'react'
import "./Button.scss";

const Button = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="Button">
                <p>{props.text}</p>
                <div>{props.icon}</div>
        </a>
    )
}

export default Button
