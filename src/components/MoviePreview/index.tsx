import { Box } from '@mui/material';

interface MoviePreviewProps {
  posterPath?: string;
  selectedMovie?: {
    label: string;
    coverImage: string;
    poster_path: string;
  } | null;
}
export function MoviePreview({ posterPath, selectedMovie }: MoviePreviewProps) {
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
      {!selectedMovie && posterPath && (
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src={posterPath}
          alt='poster'
        />
      )}
    </Box>
  );
}
