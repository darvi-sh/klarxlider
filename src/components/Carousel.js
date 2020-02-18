import React, { useState } from 'react';
import Slide from './Slide';

import './Carousel.css';

export default function Carousel(props) {
    // go to exists only as a wrapper function for setTurn
    const [turn, setTurn] = useState(0);

    const MIN_LIMIT = 0;
    const MAX_LIMIT = props.slides.length - 1;

    // in order to implement looping effect
    // we can propvide a prop and
    // detect the limits and setTurn to the opposite limit
    function goTo(moveValue = 1) {
        setTurn(Math.max(Math.min(turn + moveValue, MAX_LIMIT), MIN_LIMIT));
    }

    return (
        <div className="carousel-wrapper">
            <button
                onClick={() =>
                    goTo( -1 )
                }
            >&lt;</button>

            <div className="slides">
                { props.slides.map( (slide, index) =>
                    <Slide
                        turn={ turn }
                        key={ index }
                        index={ index }
                        slide={ slide }
                    /> )
                }
            </div>

            <button
                onClick={() =>
                    goTo( 1 )
                }
            >&gt;</button>
        </div>
    )
}
