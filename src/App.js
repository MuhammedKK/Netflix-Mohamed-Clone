import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Posts from './Components/Posts/Posts';
import requests from './requests';

function App() {

    // Image Base URL
    const imageBaseURL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="App">
        {/* Navbar */}
        <Nav />
        {/* Header */}
        <Header imageBaseURL={imageBaseURL} />
        {/* Posts */}
        <Posts imageBaseURL={imageBaseURL} title="Netflix Originals" moviesURL={requests.fetchNetflixOriginals} isLargePost/>
        <Posts imageBaseURL={imageBaseURL} title="Netflix Trending" moviesURL={requests.fetchTrending} />
        <Posts imageBaseURL={imageBaseURL} title="Top Rated" moviesURL={requests.fetchTopRated} />
        <Posts imageBaseURL={imageBaseURL} title="Action Movies" moviesURL={requests.fetchActionMovies} />
        <Posts imageBaseURL={imageBaseURL} title="Commedy Movies" moviesURL={requests.fetchComedyMovies} />
        <Posts imageBaseURL={imageBaseURL} title="Horror Movies" moviesURL={requests.fetchHororMovies} />
        <Posts imageBaseURL={imageBaseURL} title="Romance Movies" moviesURL={requests.fetchRomanceMovies} />
        <Posts imageBaseURL={imageBaseURL} title="Documentary Movies" moviesURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
