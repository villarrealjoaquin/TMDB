import { categoriesCarrousel } from "../../../constants/const";
import { Movie } from "../../../models/types";
import { Carrousel } from "./CarrouselRender";

interface CarrouselProps {
  movies: Array<Movie>
  isLoading: boolean
}

export const CarrouselRender = ({ movies }: CarrouselProps) => {
  return (
    <>
      <div>
        {categoriesCarrousel.map((category) => {
          const categoryMovies = movies.filter((movie: Movie) => movie.category === category);
          return (
            <Carrousel key={category} category={category} movies={categoryMovies} />
          );
        })}
      </div>
    </>
  )
}