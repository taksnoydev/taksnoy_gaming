import React from 'react'
import "./Button.scss";

const Button = (props) => {

    var style = `Button Button--${props.color}`;

    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className={style}>
                <p>{props.text}</p>
                <div>{props.icon}</div>
        </a>
    )
}

export default Button
