import { Box } from '@mui/material';
import { Header } from './components/Header';
import { Movie } from './components/Movie';

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
      <Box style={{ width: '100%' }}>
        <Header />
        <Movie />
      </Box>
    </Box>
  );
}
