const API_KEY='db68961913554a477a14a319c5e20865'
const requests ={
    fetchTrending :`/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOg :`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated :`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies :`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`, 
    fetchHorrorMovies :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchComedyMovies :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanceMovies :`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries :`/discover/movie?api_key=${API_KEY}&with_genres=99`

}

export default requests


