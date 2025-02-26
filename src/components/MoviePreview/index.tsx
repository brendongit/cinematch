import { Box } from '@mui/material';

export function MoviePreview() {
  const posterImage =
    'https://i0.wp.com/picjumbo.com/wp-content/uploads/soft-smoke-abstract-background-free-posterImage.jpeg?w=600&quality=80';
  return (
    <Box
      style={{
        marginBottom: '20px',
        width: '280px',
        height: '400px',
        background: '#a0a0a0',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <img
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        src={posterImage}
        alt='poster'
      />
    </Box>
  );
}
