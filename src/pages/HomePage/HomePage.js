import React, {useEffect, useRef, useState} from "react";
import Menu from "../../components/Menu/Menu";
import LastFeaturedMovieBlock from "../../components/LastFeaturedMovieBlock/LastFeaturedMovieBlock";
import classes from './style/style.module.css';
import MoviesCarouselBlock from "../../components/MoviesCaruselBlock/MoviesCarouselBlock";
import {data} from '../../data/data';

const HomePage = () => {
    const {Featured, TendingNow} = data;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentMovie, setCurrentMovie] = useState(Featured);
    const childRef = useRef(null);
    console.log(childRef)
    useEffect(() => {
        const storedId = sessionStorage.getItem('id');

        if (storedId) {
            const movie = TendingNow.find((movie) => movie.Id === storedId);

            setCurrentMovie(movie)
        } else {
            setCurrentMovie(Featured)
        }

    }, []);



    const onMovieClick = (movie) => {
        setCurrentMovie(movie);
        sessionStorage.setItem('id', +movie.Id);

        setTimeout(() => {
            childRef.current.playVideo();
        }, 2000)

    }

    return (
        <div className="App">
            <Menu
                onMenuOpen={() => setIsMenuOpen(true)}
                onMenuClose={() => setIsMenuOpen(false)}
                isMenuOpen={isMenuOpen}
            />
            <div className={`${classes.mainBlock} ${isMenuOpen ? classes.menuOpen : ''}`}>
                <LastFeaturedMovieBlock currentMovie={currentMovie} ref={childRef}/>
                <MoviesCarouselBlock onMovieClick={onMovieClick}/>
            </div>
        </div>
    )
}

export default HomePage


