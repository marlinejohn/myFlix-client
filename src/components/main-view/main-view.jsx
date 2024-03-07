import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Forrest Gump",
      image:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_v13_aa.jpg",
      description:
        "Robert Zemeckis' heartwarming journey through decades of American history with the extraordinary life of Forrest Gump. A tale of love, destiny, and the impact of one man on the world.",
      genre: "Darama",
      director: "Christopher Nolan",
      featured: false,
    },
    {
      id: 2,
      title: "The Matrix",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description:
      "The Wachowskis groundbreaking science fiction film that explores the concept of reality and identity within a simulated world. A mind-bending adventure that questions the nature of existence.",
      genre: "Science Fiction",
      director: "Quentin Tarantino",
      featured: true,
    },
    {
      id: 3,
      title: "Inception",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      description:
        "Inception is a mind-bending science fiction thriller directed by Christopher Nolan. The film explores the concept of dreams within dreams, taking the audience on a visually stunning and intellectually stimulating journey through layers of subconsciousness.",
      genre: "Science Fiction",
      director: "Christopher Nolan",
      featured: true,
    },
    {
      id: 4,
      title: "Schindler's List",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzcxNjZjMzEtNjZmZC00OTY4LWI1YmYtNGI0MzRlMGFjZTAzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
      description:
        "Steven Spielberg's poignant depiction of Oskar Schindler's efforts to save Jews during the Holocaust. A heartbreaking and inspiring true story of courage and humanity.",
      genre: "Darama",
      director: "Steven Spielberg",
      featured: false,
    },
    {
      id: 5,
      title: "Jurassic Park",
      image:
        "https://m.media-amazon.com/images/I/81AGqBcpYOL._AC_UF894,1000_QL80_.jpg",
      description:
        "Steven Spielberg's groundbreaking adventure that brings dinosaurs back to life through cutting-edge special effects. A thrilling journey to a prehistoric island theme park.",
      genre: "Action",
      director: "Steven Spielberg",
      featured: true,
    },
    {
        id: 3,
        title: "The Dark Knight",
        image:
          "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF894,1000_QL80_.jpg",
        description:
          "A gripping superhero film directed by Christopher Nolan, delving into the complexities of justice and morality.",
        genre: "Action",
        director: "Christopher Nolan",
        featured: true,
      },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);
  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
