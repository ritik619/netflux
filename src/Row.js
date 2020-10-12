import axios from './axios'
import React, { useState ,useEffect} from 'react'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const base_url='https://image.tmdb.org/t/p/original/'

function Row(props) {
    const [movies,setMovies]=useState([]); //states
    const [trailerUrl,setTrailerUrl]=useState("")
    
    //console.log(props.fetchUrl)
    useEffect(() => {
        //async when it's fetching data
        async function fetchData(){
            const request = await axios.get(props.fetchUrl)
        //  console.log(request.data.results)
            //wait until reciveed and https://api.themoviedb.org/3/props.fetchUrl
            setMovies(request.data.results)
            return request
                    } 
        fetchData();
    }, [props.fetchUrl]); 

    const opts={
        height:"390",
        width:"100%",
        playerVars:{
           // https://developers.google.com/youtube/player_para
            autoplay:1
        }
    }
    const handleClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl("")
        }
        else {
            movieTrailer(movie?.name ||movie?.title||movie?.original_title|| "")
            .then((url)=>{
                const urlParams=new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((error)=>console.log(movie))
        }
    }
    //movies make sure every update on movies is counted fetchurl 
    //console.log(base_url)
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='row_posters'>
                {/*several row poster */ }
                {movies.map(movie=>(
                    <div >
                    {/*console.log(props.title==='TopRated'? movie:"")*/}    
                    <img 
                    onClick={()=>handleClick(movie)}
                    key={movie.id}
                    className={props.isLargeRow?'row_posterLarge':'row_poster'} src={`${base_url}${props.isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                    </div>
                ))}    
            </div>    
            {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row


