import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'
const base_url='https://image.tmdb.org/t/p/original'

function Banner() {
    const[ movie,setMovie]=useState([])
    useEffect(() => {
       async function fetchData(){
            const request =await axios.get(requests.fetchNetflixOg);
            //console.log('hello',request.data.results[Math.floor(Math.random()*(request.data.results.length))])
            setMovie(
                request.data.results[Math.floor(Math.random()*(request.data.results.length))]
                )
            return request
            
        }
       fetchData() 
    }, [])
   //console.log(movie)
   function truncate(str,n){
       return str?.length >n ?str.substr(0,n-1)+" ...":str
   }
    let s1={
        backgroundSize:'cover',
        backgroundImage:`url("${base_url}${movie?.poster_path}")`,
        backgroundPosition:'center center'
        }
   return (
        <header className='banner' style={s1}> 
            <div className='banner_content'>
                <h1 className='banner_title'>{movie?.name||movie?.title}</h1> 
                <button className="banner_button">Play</button>    
                <button className="banner_button">My List</button>    
                <h1 className='banner_desc'>{truncate(movie?.overview,150)}</h1>
                <div className='banner_fade'/>
                </div>
            
        </header>
    )
}


export default Banner
