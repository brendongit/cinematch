import { Box } from '@mui/material';
import { Header } from './components/Header';
import { SelectMovies } from './components/SelectMovies';

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
      <Box style={{ width: '100%', maxWidth: '1280px' }}>
        <Header />
        <SelectMovies />
      </Box>
    </Box>
  );
}
