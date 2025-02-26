import { Box } from '@mui/material';
import logo from '../../assets/logo.png';

export function Header() {
  return (
    <Box style={{ background: '#3b3b3b', width: '100%', padding: '20px' }}>
      <img src={logo} alt='logo' style={{ width: '190px' }} />
    </Box>
  );
}
