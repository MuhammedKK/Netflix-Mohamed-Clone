import React, {useState, useEffect} from 'react';
import './Header.css';
import '../../requests';
import axios from '../../axios';
import requests from '../../requests';

const Header = ({imageBaseURL}) => {

    // Hook Of Get Movie Header Background
    const [movieBack, setMovieBack] = useState([]);

    // Hook Of Effect To Get Movie

    useEffect(() => {
        const fetchMovie = async () => {
            const {data} = await axios.get(requests.fetchNetflixOriginals);
            console.log(data);
            setMovieBack(data.results[
                Math.floor(Math.random() * data.results.length - 1)
            ]);
        }

        fetchMovie();
    }, [])

    console.log(movieBack)

    // Function To Trim The Movie Description
    const trimDesc = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + '...' : str
    }

    return (
        <div className="header"
                style={{
                    backgroundImage: `url(${imageBaseURL}${movieBack.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',

                }}
        >
            <div className="header__content">
                <h1 className="header__title">{movieBack.original_name}</h1>
                <div className="header__btns">
                    <button className="header__btn">Play</button>
                    <button className="header__btn">Get Started</button>
                </div>
                <h1 className="header__desc">
                    {trimDesc(
                        movieBack.overview,
                        150
                    )}
                </h1>
            </div>
            <div className="header__bottom__overlay"/>
        </div>
    )
}

export default Header
