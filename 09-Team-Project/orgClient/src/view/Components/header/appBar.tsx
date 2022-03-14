import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

export default function MenuAppBar() {
  const nav = useNavigate();

  return (
    <AppBar position="static" style={{ backgroundColor: "#889FEF" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <HomeIcon onClick={() => nav('/accidents')} style={{ fontSize: "40px" }}  />
        </IconButton>

        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <SettingsIcon style={{ fontSize: "40px" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
