import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';

export default function MenuAppBar(props: any) {
  const nav = useNavigate();
  const { type } = props;

  return (
    <AppBar position="static" style={{ backgroundColor: "#889FEF" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {type !== "home" ?
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon onClick={() => nav('/accidents')} style={{ fontSize: "40px" }} />
          </IconButton> :
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ChatIcon onClick={() => nav('/accidents')} style={{ fontSize: "40px" }} />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <SearchIcon onClick={() => nav('/accidentsByLocation')} style={{ fontSize: "40px" }} />
            </IconButton>
          </>
        }
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
