import React, {useState, useEffect} from 'react';
import axios from '../../axios';
import './Posts.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Posts = ({title, moviesURL, isLargePost, imageBaseURL}) => {

    // Hook Of Movies
    const [movies, setMovies] = useState([]);
    // Hook To Get Movie Id
    const [trailerID, setTrailerID] = useState("");

    // Effects On Movies
    useEffect(() => {
        const fetchMovies = async () => {
            const {data} = await axios.get(moviesURL);
            setMovies(data.results);
            return data;
        }

        fetchMovies();
    }, [moviesURL]);

    // Obj Of Options To Pass it to youtube component lib
    const opts = {
        height: "400px",
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1
        },
    };

    // Function To Handle Trailer ID 
    const handleTrailerId = (movie) => {
        if(trailerID) setTrailerID("");
        else {
            movieTrailer(movie?.name || movie?.original_title || movie?.title || '')
            .then((url) => {
                const videoParam = new URLSearchParams(new URL(url).search);
                setTrailerID(videoParam.get('v'));
            })
            .catch((err) =>{
                console.log(err)
            });
        }
    }

    console.log(movies);
    return (
        <div className="row">
            <h3>{title}</h3>
            <div className={`row__posts`}>
                {movies.map(movie => (
                    <img 
                        className={`row__poster ${isLargePost && "row__poster__large"}`}
                        key={movie.id} 
                        src={`${imageBaseURL}${isLargePost? movie.poster_path : movie.backdrop_path}`}
                        alt="Name"
                        onClick={() => handleTrailerId(movie)} 
                     />
                ))}
            </div>
            {trailerID && <YouTube videoId={trailerID} opts={opts} containerClassName="embed embed-youtube"/>}
        </div>
    )
}

export default Posts
