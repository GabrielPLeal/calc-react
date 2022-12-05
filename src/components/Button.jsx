import React from "react";
import './Button.css';

const Button = props => {

    const classes = setClasses(props)

    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}

function setClasses(props) {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double': ''
    classes += props.triple ? 'triple': ''
    return classes
}

export default Button