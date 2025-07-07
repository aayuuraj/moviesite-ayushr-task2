const Navbar = () => {
  return (
    <header className="flex flex-col bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className="text-yellow-400 text-2xl font-bold">plex</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <a className="hover:text-yellow-400" href="#">Home</a>
          <a className="hover:text-yellow-400" href="#">Live TV</a>
          <a className="hover:text-yellow-400" href="#">On Demand</a>
          <a className="hover:text-yellow-400" href="#">Discover</a>
        </nav>
        <div className="flex items-center gap-4">
          <input type="text" placeholder="Search" className="bg-zinc-800 text-white px-3 py-1 rounded-md focus:outline-none focus:ring focus:ring-yellow-400" />
          <button className="bg-zinc-700 px-3 py-1 rounded-md hover:bg-zinc-600">Login</button>
          <button className="bg-yellow-500 text-black px-3 py-1 rounded-md hover:bg-yellow-400">Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar