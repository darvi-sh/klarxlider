import React from 'react'

import './Slide.css';

export default function Slide(props) {
    return (
        <div className={ "slide" + (props.turn === props.index ? ` current` : ``) }>
            <img
                src={ props.slide }
                alt={ `${ props.index }` }
            />
        </div>
    )
}
