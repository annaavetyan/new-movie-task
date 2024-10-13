import React, {useEffect, useImperativeHandle, useRef, useState} from "react";
import classes from '../LastFeaturedMovieBlock/style/style.module.css';
import {data} from "../../data/data";
import FeaturedCoverImage from '../../images/movieCovers/FeaturedCoverImage.png';
import FeaturedTitleImage from '../../images/FeaturedTitleImage.png';
import '@fortawesome/fontawesome-free/css/all.css';
import {imageList} from '../../const/images';

const LastFeaturedMovieBlock = React.forwardRef((props, ref) => {
    const {currentMovie} = props;

    const [playMovie, setPlayMovie] = useState(false);
    const videoRef = useRef(null);


    useEffect(() => {
        if (playMovie) {
            videoRef.current.pause();

            if (videoRef.current) {
                videoRef.current.load(); // Forces the video to reload with the new src
            }

            setPlayMovie(false);
        }
    }, [currentMovie]);

    function convertSecondsToHours(seconds) {
        const hours = Math.floor(seconds / 3600); // 1 hour = 3600 seconds
        const minutes = Math.floor((seconds % 3600) / 60); // Remaining seconds converted to minutes
        const remainingSeconds = seconds % 60; // Remaining seconds after converting to hours and minutes

        return `${hours}h ${minutes}m ${remainingSeconds}s`;
    }

    const getBackgroundImage = () => {
        const image = imageList.find((image) => image.id === +currentMovie.Id);
        const bgImage = `url(${image ? image.src : FeaturedCoverImage})`;

        return {
            backgroundImage: bgImage
        }
    }

    const playVideo = () => {
        setPlayMovie(true);

        videoRef.current.play();
    }

    useImperativeHandle(ref, () => ({
        playVideo: () => {
            setPlayMovie(true);

            videoRef.current.play();
        },
    }));

    const videoSrc = currentMovie.VideoUrl;

    return (
        <section className={classes.lastFeatureBlock}>
            <div className={classes.videoBlock}>
                <div className={`${classes.videoBox} ${playMovie ? classes.openVideo : ''}`}>
                    {
                        videoSrc && <video ref={videoRef} width={'100%'} height={'100%'}>
                            <source src={videoSrc}/>
                        </video>
                    }
                </div>


                <div className={`${classes.coverPhoto} ${playMovie ? classes.closeBox : ''}`}
                     style={getBackgroundImage()}></div>
                <div className={`${classes.contentBlock} ${playMovie ? classes.closeBox : ''}`}>
                    <h1 className={classes.title}>{currentMovie?.Category}</h1>
                    <img src={FeaturedTitleImage}/>
                    <p className={classes.pretitle}>{currentMovie?.Title}</p>
                    <div className={classes.parameters}>
                        <p className={classes.parametersItem}>{currentMovie?.ReleaseYear}</p>
                        <p className={classes.parametersItem}>{currentMovie?.MpaRating}</p>
                        <p className={classes.parametersItem}>{convertSecondsToHours(currentMovie?.Duration)}</p>
                    </div>
                    <p className={classes.description}>
                        {currentMovie?.Description}
                    </p>
                    <div className={classes.buttonContainer}>
                        <button className={`${classes.button} ${classes.playButton}`} onClick={playVideo}>
                            <i className="fa-solid fa-play" style={{fontSize: '13px', marginRight: '5px'}}></i>
                            Play
                        </button>
                        <button className={`${classes.button} ${classes.moreInfoButton}`} onClick={playVideo}>More Info
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default LastFeaturedMovieBlock