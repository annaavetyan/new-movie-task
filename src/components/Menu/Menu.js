import React, {useState} from "react";
import classes from './style/style.module.css';
import {Link, NavLink} from "react-router-dom";
import genres from '../../images/menuIcons/genres.png';
import home from '../../images/menuIcons/home.png';
import movies from '../../images/menuIcons/movies.png';
import search from '../../images/menuIcons/search.png';
import tvShows from '../../images/menuIcons/tvShows.png';
import watchLater from '../../images/menuIcons/watchLater.png';
import userIcon from '../../images/userIcon.png';
const Menu = ({onMenuOpen, onMenuClose, isMenuOpen}) => {

    return (
        <div className={`${classes.menuContainer} ${isMenuOpen? classes.open :''}`}
             onMouseEnter={onMenuOpen}
             onMouseLeave={onMenuClose}
        >
            <div className={classes.menu}>
                <div>
                    <div className={classes.userBox}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <span className={classes.userIcon}><img src={userIcon} title='user' width={'100%'} height={'100%'} /></span>
                            <p className={classes.userText}>Daniel</p>
                        </div>
                    </div>
                    <ul className={classes.topMenuList}>
                        <li>
                            <NavLink to={'/'}>
                                <div className={classes.menuItem}>
                                    <img src={search} title='search'/>
                                    <div className={classes.text}>Search</div>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>
                                <div className={classes.menuItem}>
                                    <img src={home} title='home'/>
                                    <span className={classes.text}>Home</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>
                                <div className={classes.menuItem}>
                                    <img src={tvShows} title='TV Shows'/>
                                    <span className={classes.text}>TV</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>
                                <div className={classes.menuItem}>
                                    <img src={movies} title='Movies'/>
                                    <span className={classes.text}>Movies</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>
                                <div className={classes.menuItem}>
                                    <img src={genres} title='Genres'/>
                                    <span className={classes.text}>Genres</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>
                                <div className={classes.menuItem}>
                                    <img src={watchLater} title='Watch Later'/>
                                    <span className={classes.text}>Watch</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <ul className={classes.menuBottomList}>
                    <li>
                        <NavLink >
                            language
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/help'}>
                            get help
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/exit'}>
                            exit
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu