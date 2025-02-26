import { Box } from '@mui/material';
import { Header } from './components/Header';

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
      </Box>
    </Box>
  );
}
