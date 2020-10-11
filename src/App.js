import React from 'react'
import './App.css'
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
    <h1>BotFLix</h1>
    <Row title='Netflix OG' fetchUrl={requests.fetchNetflixOg}/>
    <Row title='Trending' fetchUrl={requests.fetchTrending}/>
     
    </div>
  )
}

export default App;
