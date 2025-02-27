import { useState } from 'react';
import { Autocomplete, Avatar, TextField } from '@mui/material';
import { Box } from '@mui/material';
import { MoviePreview } from '../MoviePreview';

interface MovieAutocompleteProps {
  options: { label: string; coverImage: string; poster_path: string }[];
  label?: string;
  width?: string;
}

export function MovieAutocomplete({
  options,
  label = 'Escolha um filme',
  width = '300px',
}: MovieAutocompleteProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [selectedMovie, setSelectedMovie] = useState<{
    label: string;
    coverImage: string;
    poster_path: string;
  } | null>(null);

  const handleImageError = (label: string) => {
    setImageErrors((prev) => ({ ...prev, [label]: true }));
  };

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <MoviePreview
        selectedMovie={selectedMovie}
        posterPath={selectedMovie?.poster_path}
      />
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        style={{ width }}
        onChange={(_, newValue) => setSelectedMovie(newValue)}
        renderOption={(props, option) => (
          <Box component='li' {...props} display='flex' alignItems='center'>
            {!imageErrors[option.label] ? (
              <img
                src={option.coverImage}
                alt={option.label}
                style={{ width: 40, marginRight: 8 }}
                onError={() => handleImageError(option.label)}
              />
            ) : (
              <Avatar
                src={option.coverImage}
                alt={option.label}
                style={{ width: 40, height: 40, marginRight: 8 }}
              />
            )}
            {option.label}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Box>
  );
}
