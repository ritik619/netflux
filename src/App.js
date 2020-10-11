import React from 'react'
import './App.css'
import Row from './Row'
import requests from './requests'
import Nav from './Nav'
import Banner from './Banner'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title='Netflix OG' isLargeRow fetchUrl={requests.fetchNetflixOg}/>
      <Row title='Trending' fetchUrl={requests.fetchTrending}/>
      <Row title='ActionMovies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='ComedyMovies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
      <Row title='HorrorMovies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='RomanceMovies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='TopRated' fetchUrl={requests.fetchTopRated}/>
    </div>
  )
}

export default App;

 /*
    */