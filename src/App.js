import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import Navigate from './components/Navigate';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [movieList , setMovieList] = useState([
    { 
      id : "01" ,
      title : "Peaky Blinders",
      description :"A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
      posterUrl : "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
      rating : 5,
      trailer : "https://www.youtube.com/embed/oVzVdvGIC7U?si=yqLY_OX7ozRkFhwP" 
    },
    { 
      id : "02" ,
      title : "Lucifer",
      description :"A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
      posterUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZflmHOmRHZrm4aeUaz9lCUhcL-n-paXZNw&s" , 
      rating : 4,
      trailer : "https://www.youtube.com/embed/X4bF_quwNtw?si=TKAAekOZKRqBC5yn"
    },
    { 
      id : "03" ,
      title : "Vikings",
      description :"Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean.",
      posterUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRldnzKpV-OjHLnWvEDB-SI_lVofRLFpCXAXA&s",
      rating : 3,
      trailer : "https://www.youtube.com/embed/Y7d0A5re7-0?si=Wz7SeS0TyBOi59nD" 
    },
  ])

  const [searchInput , setSearchInput] = useState("")
  const [rateInput , setRateInput] = useState(1)


  const addNewMovie = (movie) => {
    setMovieList([
      ...movieList , {...movie , id : uuidv4()}
    ])
  }


  const handleSearch = (text) => {
    setSearchInput(text)
  }

  const handleRateInput = (number) => {
    console.log('number', number)
    setRateInput(number)
  }



  return (
    <div>
      <Navigate/>
      <div className='my-3 text-end me-5'>
       <AddMovie addNewMovie={addNewMovie} />
      </div>

      <div className='my-3 text-start ms-5'>
          <Filter handleSearch={handleSearch}  handleRateInput = {handleRateInput}/>
      </div>

    
    
      <Routes>
        <Route 
          path='/'
          element={
            <MovieList data={movieList.filter((elm)=> elm.title.toLowerCase().includes(searchInput.toLowerCase().trim()) && elm.rating >= rateInput  )}/>
          }
        
        />

        <Route path='/movie/:id' element={<MovieDetails movieList={movieList}/>}  />

        <Route path='*' element={<h1> Thabbet rouhek win de5el </h1>} />
      </Routes>

    </div>

  );
}

export default App;
