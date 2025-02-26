import { useState } from 'react';
import { Autocomplete, Avatar, TextField } from '@mui/material';
import { fakeData } from './fakeData';
import { Box } from '@mui/material';

export function MovieInput() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (label: string) => {
    setImageErrors((prev) => ({ ...prev, [label]: true }));
  };

  return (
    <Autocomplete
      options={fakeData}
      getOptionLabel={(option) => option.label}
      style={{ width: '300px' }}
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
              style={{ width: 40, marginRight: 8 }}
            />
          )}
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField {...params} label='Escolha um filme' />
      )}
    />
  );
}
