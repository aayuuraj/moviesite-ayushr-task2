import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/movie/${movie.id}`)} className="w-[180px] h-[270px] rounded-lg overflow-hidden cursor-pointer group relative flex-shrink-0">
      <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover group-hover:brightness-50 transition" />
      <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black via-transparent to-transparent p-1">
        <h3 className="text-white text-sm font-semibold drop-shadow-lg">{movie.title}</h3>
      </div>
    </div>
  )
}

export default MovieCard
