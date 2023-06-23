import { useEffect, useState } from "react";
import { fetchMoviesByCategory } from "../services/tmdb.api";

export function useGetMovies() {
  const [movies, setMovies] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getFiltersMovies = async () => {
    try {
      const res = await fetchMoviesByCategory();
      setMovies(res);
      setIsLoading(true)
    } catch (error) {}
  };

  useEffect(() => {
    getFiltersMovies();
  }, []);

  return { movies, isLoading }
}