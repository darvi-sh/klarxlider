import React, { useState, useEffect, createRef } from 'react';
import Slide from './Slide';

import './Carousel.css';

export default function Carousel(props) {
    // go to exists only as a wrapper function for setTurn
    const [turn, setTurn] = useState(0);
    let slidesViewport = createRef();
    let slides = createRef();

    const MIN_LIMIT = 0;
    const MAX_LIMIT = props.slides.length - 1;

    function goTo(moveValue = 1) {
        setTurn( Math.max( Math.min( turn + moveValue, MAX_LIMIT ), MIN_LIMIT ) );
    }

    useEffect(() => {
        const viewportWidth = slidesViewport.current.offsetWidth;

        slides.current.style.transform = `translateX(${-(viewportWidth * turn)}px)`;

    }, [turn, slidesViewport, slides]);

    return (
        <div className="carousel-wrapper">
            <button
                className={"navigation-button"}
                disabled={turn <= MIN_LIMIT}
                onClick={() =>
                    goTo( -1 )
                }
            >&lt;</button>

            <div className="slides-viewport" ref={slidesViewport}>
                <div className="slides" ref={slides}>
                    { props.slides.map( (slide, index) =>
                        <Slide
                            key={ index }
                            slide={ slide }
                            className={ turn === index ? ` current` : `` }
                        /> )
                    }
                </div>
            </div>

            <button
                className={"navigation-button"}
                disabled={turn >= MAX_LIMIT}
                onClick={() =>
                    goTo( 1 )
                }
            >&gt;</button>
        </div>
    )
}
