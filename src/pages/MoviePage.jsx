import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import CastModal from '../components/CastModal'

const MoviePage = ({ movies }) => {
  const { id } = useParams()
  const [selectedCast, setSelectedCast] = useState(null)
  const navigate = useNavigate()

  const movie = movies.find(m => m.id === Number(id))

  if (!movie) return <div className="text-white p-6">Loading...</div>

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <button onClick={() => navigate('/')} className="mb-4 underline text-yellow-400">← Back</button>
      <div className="flex flex-col md:flex-row gap-6">
        <img src={movie.poster} alt={movie.title} className="w-full md:w-64 rounded-xl object-cover" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
          <p className="text-sm text-zinc-300 mb-2">⭐ {movie.imdb} • {movie.runtime} • {movie.genre}</p>
          <p className="text-sm mb-4 text-zinc-400">{movie.description}</p>
          <div className="flex gap-4 mb-6">
            <button className="bg-yellow-500 px-4 py-2 rounded text-black">Watch Free</button>
            <button className="bg-zinc-700 px-4 py-2 rounded">Download</button>
          </div>
          <h3 className="text-yellow-400 font-semibold mb-2">Cast</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {movie.cast.map(member => (
              <div key={member.name} onClick={() => setSelectedCast(member)} className="flex items-center gap-2 cursor-pointer">
                <img src={member.photo} alt={member.name} className="w-10 h-10 rounded-full object-cover border border-zinc-600" />
                <span className="text-sm hover:underline">{member.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CastModal selectedCast={selectedCast} onClose={() => setSelectedCast(null)} />
    </div>
  )
}

export default MoviePage