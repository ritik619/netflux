import axios from './axios'
import React, { useState ,useEffect} from 'react'
import requests from './requests';
import './Row.css'
const base_url='https://image.tmdb.org/t/p/original/'

function Row(props) {
    const [movies,setMovies]=useState([]); //states
    //console.log(props.fetchUrl)
    useEffect(() => {
        //async when it's fetching data
        async function fetchData(){
                const request = await axios.get(props.fetchUrl)
                console.log(request.data.results)
                //wait until reciveed and https://api.themoviedb.org/3/props.fetchUrl
                setMovies(request.data.results)
                return request
            } 
        fetchData();
    }, [props.fetchUrl]); 
    //movies make sure every update on movies is counted fetchurl 
    console.log(base_url)
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='row_posters'>
                {/*several row poster */ }
                {movies.map(movie=>(
                    <div >
                    <img className='row_poster' src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                    <h3>{movie.original_name}</h3></div>
                ))}    
            </div>    

        </div>
    )
}

export default Row
