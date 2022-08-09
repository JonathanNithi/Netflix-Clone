const APIKEY = "0185493c53776b3bed844b05915cbe92";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${APIKEY}`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${APIKEY}`,
    fetchTopRatedSeries: `/tv/top_rated?api_key=${APIKEY}`,
    fetchTopActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchTopComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchTopHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchTopRomanticMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
}

export default requests;

