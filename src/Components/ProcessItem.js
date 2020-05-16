import React from 'react'
import "./ProcessItem.scss"

const ProcessItem = props => {
    return (
        <div className="ProcessItem">
            {props.icon}
            <div>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}


export default ProcessItem
