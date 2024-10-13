import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './style/style.module.css';
import {data} from "../../data/data";
import {imageList} from '../../const/images'



const Carousel = (props) => {
    const {onMovieClick} = props;
    const {TendingNow} = data;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8, // Show 8 items at a time
        slidesToScroll: 1,
        swipe: true, // Enable swiping
        swipeToSlide: true,
        draggable: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    TendingNow.map((tending, index) => {
                        const image = imageList.find((image) => image.id === +tending.Id);

                        return (
                            <div key={index} className={classes.movieBox} onClick={() => onMovieClick(tending)}>
                                <img src={image?.src}/>
                            </div>
                        )
                    })
                }

            </Slider>
        </div>
    )
}

export default Carousel;