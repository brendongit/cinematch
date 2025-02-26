import { Box } from '@mui/material';
import { MovieAutocomplete } from '../MovieInput';
import { fakeData } from '../MovieInput/fakeData';
import { useEffect } from 'react';
import { moviesApi } from '../../api/moviesApi';

export function Movie() {
  useEffect(() => {
    function LoadMovies() {
      moviesApi
        .get('/movie/popular', {
          params: {
            page: 1,
          },
        })
        .then((response) => {
          if (response.status == 200) {
            console.log('response', response.data);
          }
        })
        .catch((error) => {
          console.log('LoadMovies error ' + error);
        });
    }

    LoadMovies();
  }, []);

  return (
    <Box
      style={{
        background: '#919191',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        width: '100%',
      }}
    >
      <MovieAutocomplete options={fakeData} />
      <MovieAutocomplete options={fakeData} />
    </Box>
  );
}
