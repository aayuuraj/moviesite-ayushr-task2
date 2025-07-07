import Navbar from '../components/Navbar'
import MovieRow from '../components/MovieRow'

const Home = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <main className="p-6 text-center">Loading movies...</main>
      </div>
    )
  }

  const firstRow = movies.slice(0, 10)
  const secondRow = movies.slice(10, 20)

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="p-6 flex flex-col gap-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Watch Free Now</h2>
          <MovieRow movies={firstRow} />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Trending Now</h2>
          <MovieRow movies={secondRow} />
        </section>

        <section className="bg-zinc-900 text-center py-10 px-4 rounded-xl">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Go ahead, stream free</h3>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-6">
            With Plex you can watch over 20,000 free movies and shows, plus Live TV on almost any device. What are you waiting for?
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold">Sign Up</button>
        </section>
      </main>
    </div>
  )
}

export default Home

