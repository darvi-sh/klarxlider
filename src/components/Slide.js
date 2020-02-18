import React from 'react'

import './Slide.css';

export default function Slide(props) {
    return (
        <div className={
            "slide" + props.className
            }>
            <img
                src={ props.slide }
                alt={ `${ props.slide }` }
            />
        </div>
    )
}
