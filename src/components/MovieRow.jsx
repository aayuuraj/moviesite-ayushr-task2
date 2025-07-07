import { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieRow = ({ movies }) => {
  const scrollRef = useRef(null)

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-opacity-80 p-2 rounded-full" onClick={() => scroll(-300)}>◀</button>
      <div ref={scrollRef} className="flex overflow-x-auto gap-4 scrollbar-hide px-8">
        {movies.map((m) => (<MovieCard key={m.id} movie={m} />))}
      </div>
      <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-opacity-80 p-2 rounded-full" onClick={() => scroll(300)}>▶</button>
    </div>
  )
}

export default MovieRow