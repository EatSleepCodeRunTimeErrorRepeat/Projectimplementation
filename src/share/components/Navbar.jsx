import React from 'react';
import { BrowserRouter as Link, Route, Routes } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MenuImage from '../../assets/Logo.png';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from '../../pages/Home';
import User from '../../pages/User';
import Manga from '../../pages/Manga';
import Community from '../../pages/Community';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '16px',
  backgroundColor: theme.palette.grey[800],
  '&:hover': {
    backgroundColor: '#575E5E',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 2),
  height: '100%',
  position: 'absolute',
  right: 0,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: alpha('#FFFFFF', 0.5),
  '& .MuiInputBase-input': {
    textAlign: 'left',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(6),
  marginRight: theme.spacing(6),
  borderRadius: '20px',
  '&:hover': {
    color: 'white',
    backgroundColor: '#000000',
    padding: theme.spacing(0.5, 6),
  },
}));

const SurpriseButton = styled(Button)(({ theme }) => ({
  marginLeft: 'auto',
  borderRadius: '20px',
  '&:hover': {
    color: 'white',
    backgroundColor: '#222222',
    padding: theme.spacing(0.5, 2),
  },
}));

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16,
  },
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

const BoxButtons = styled(Box)(({ theme }) => ({
  backgroundColor: 'gold',
  padding: '10px',
  display: 'flex',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center', // Center the buttons on smaller screens
    flexWrap: 'wrap', // Allow the buttons to wrap to the next line
  },
}));

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <img
                  src={MenuImage}
                  alt="Menu"
                  style={{ borderRadius: '50%', width: 80, height: 80 }}
                />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                MangaNation
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
            </Toolbar>
          </AppBar>
          <BoxButtons>
            <NavButton color="inherit" component={Link} to="/">
              Home
            </NavButton>
            <NavButton color="inherit" component={Link} to="/user">
              User
            </NavButton>
            <NavButton color="inherit" component={Link} to="/manga">
              Manga
            </NavButton>
            <NavButton color="inherit" component={Link} to="/community">
              Community
            </NavButton>
            <SurpriseButton color="inherit">Surprise Me!</SurpriseButton>
          </BoxButtons>

          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        </Box>
    </ThemeProvider>
  );
};

export default Navbar;
