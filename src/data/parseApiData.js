const parseApiData = (apiData) => {
  return apiData.map((movie, index) => ({
    id: index + 1,
    title: movie.original_title,
    description: movie.overview,
    poster: movie.poster_path,
    imdb: movie.vote_average?.toFixed(1),
    genre: movie.genre_names?.join(', '),
    runtime: '2h',
    cast: movie.casts?.slice(0, 5).map(c => ({
      name: c.name,
      photo: c.profile_path,
      bio: `Plays ${c.character}`
    })) || []
  }))
}

export default parseApiData