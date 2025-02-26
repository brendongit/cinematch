import { Box } from '@mui/material';

interface MoviePreviewProps {
  posterPath?: string;
}
export function MoviePreview({ posterPath }: MoviePreviewProps) {
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
        src={posterPath}
        alt='poster'
      />
    </Box>
  );
}
