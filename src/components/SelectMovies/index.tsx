import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { MovieAutocomplete } from '../MovieAutocomplete';
import { moviesApi } from '../../api/moviesApi';

interface MovieApiResponse {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieOption {
  label: string;
  coverImage: string;
  poster_path: string;
}

export function SelectMovies() {
  const [movies, setMovies] = useState<MovieOption[]>([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await moviesApi.get<{ results: MovieApiResponse[] }>(
          '/movie/popular',
          {
            params: {
              page: 1,
            },
          }
        );

        if (response.status === 200) {
          const movieOptions: MovieOption[] = response.data.results.map(
            (movie) => ({
              label: movie.title,
              coverImage: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
              poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
            })
          );

          setMovies(movieOptions);
        }
      } catch (error) {
        console.error('Erro ao carregar filmes:', error);
      }
    }

    loadMovies();
  }, []);

  return (
    <Box
      style={{
        background: '#919191',
        minHeight: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        width: '100%',
        padding: '20px',
      }}
    >
      <MovieAutocomplete options={movies} />
      <MovieAutocomplete options={movies} />
    </Box>
  );
}
