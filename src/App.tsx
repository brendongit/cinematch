import { Box } from '@mui/material';
import { Header } from './components/Header';
import { MovieInput } from './components/MovieInput';

export default function App() {
  return (
    <Box
      style={{
        background: 'gray',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box style={{ width: '1280px' }}>
        <Header />
        <MovieInput />
      </Box>
    </Box>
  );
}
