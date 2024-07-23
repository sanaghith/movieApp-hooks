import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieDetails = ({movieList}) => {

    const params = useParams()

    const movie = movieList.find((el)=> el.id == params.id)



  return (
    <div>
        <h1> {movie.title} </h1>
        <h2> {movie.description} </h2>

           
            <iframe  style={{ width: "550px", height:"350px" , borderRadius:"5px" }} className='video'
                        title='Youtube player'
                        src={movie.trailer}>
            </iframe>

        <button> <Link to="/">  Back to home </Link> </button>    

    </div>
  )
}

export default MovieDetails