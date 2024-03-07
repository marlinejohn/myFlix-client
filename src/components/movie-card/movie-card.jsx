export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <div
        onClick={() => {
          onMovieClick(movie);
        }}
      >
        {movie.title}
      </div>
    );
  };
  
  // OR
  // export const movieCard = (props) => {
  //     return <div>{props.movie.title}</div>;
  //   };
  