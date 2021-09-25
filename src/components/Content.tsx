
import { Header } from './Header';

import { MovieCard } from './MovieCard';
interface moviesProps {
  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: 
      Array<{
        Value: string;
      }>;
    Runtime: string;
  }>
  selectedGenre: { title: string }
}

export function Content({movies, selectedGenre}:moviesProps) {
  // Complete aqui

  return (
    <div className="container">

    <Header selectedGenre={selectedGenre}/>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
        </div>
      </main>

    </div>
  )
}