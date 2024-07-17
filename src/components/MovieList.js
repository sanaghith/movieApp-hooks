import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({data}) => {
  return (
    <div className='container-xxl my-5'>
        <div className="row">
        {
            data.map((movie , i) => (
                <div key={i} className="col-4 d-flex align-items-center justify-content-center">
                    <MovieCard movie={movie}/>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default MovieList