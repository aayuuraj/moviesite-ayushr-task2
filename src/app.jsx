import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import { useEffect, useState } from 'react'
import axios from 'axios'
import parseApiData from './data/parseApiData'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('https://jsonfakery.com/movies/paginated')
      .then(res => {
        const data = res.data?.data || res.data
        setMovies(parseApiData(data))
      })
      .catch(console.error)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<MoviePage movies={movies} />} />
      </Routes>
    </Router>
  )
}

export default App





