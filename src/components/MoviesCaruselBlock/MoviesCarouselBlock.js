import React from "react";
import classes from "../MoviesCaruselBlock/style/style.module.css";

import Carousel from "./Carousel";
const MoviesCarouselBlock = (props) => {

    return (
        <section className={classes.trendingNowSection}>
            <h2 className={classes.preTitle}>
                Trending Now
            </h2>
            <Carousel {...props}/>
        </section>
    )
}

export default MoviesCarouselBlock