import React from "react";

const  Button = ({label, onClick, style ={}, className=''}) => {
    return (
        <button
            onClick={onClick}
            className={label}
            style={style}
        >
            {label}
        </button>
    )
}

export default Button;