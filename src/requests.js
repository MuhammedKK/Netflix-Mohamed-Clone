const API_KEY = 'a16ad6e9d5bfb48911cb9913f0889d6b';

const requests = {
    fetchTrending : `/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNetflixOriginals : `/discover/tv/?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated : `/movie/top_rated/?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComedyMovies : `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchHororMovies : `/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`,
    fetchRomanceMovies : `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchDocumentaries : `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requests;