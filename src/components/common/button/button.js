import React from 'react'
import './button.css'

export const Button = ({ text, className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    )
}
