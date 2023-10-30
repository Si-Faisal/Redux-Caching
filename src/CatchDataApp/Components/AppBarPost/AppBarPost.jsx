import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import logo from '../../../assets/logo.jpg';
// import './MuiNavBar.css';
import { Link } from 'react-router-dom';
import { useContext} from "react";
// import { AuthContext } from '../../../providers/AuthProvider';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const AppBarPost = () => {

    // const {user,logOut} = useContext(AuthContext);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  //const [loggedIn, setLoggedIn] = useState(false);
  
  const user = null;


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
        
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogin = () => {
        // Handle user login logic here   // setLoggedIn(true);
        // 
       
    };

    const handleLogout = () => {
            // logOut()
            // .then(()=>{})
            // .catch(error=>console.log(error));
    };


    return (
        <AppBar position="static" 
        sx={{
            background: 'white', 
            boxShadow: 'none', 
            color:"black"
        }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img href="/" src={""} alt="Logo" style={{
                        display: { xs: 'none', sm: 'block', md: 'flex' }, marginRight: '1rem', width:"100px",height:"auto"}} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        RunWay Racks
                    </Typography>

                    <Box sx={{  display: { xs: 'flex', md: 'none' }, alignItems: 'center', }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                color: 'white',
                               
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ color: 'black' }}  >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 600,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                       RunWay Rack
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {
                    user ? (
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <Typography marginRight={2} variant='span'>{user.displayName}</Typography>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={user.photoURL} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{
                                    display: { xs: 'block', md: 'block' },
                                    color: 'white',
                                }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu} sx={{ color: 'black' }} >
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    ) : (
                        <Box sx={{ display: { xs: 'block', md: 'flex' },color:"green" }}>
                                <Link to="/login">  <Button onClick={handleLogin} variant="contained" color="success" sx={{ my: 2, }}>
                                    Login
                                </Button>
                                </Link>
                                <Link to="/register">
                                    <Button variant="outlined" color="error" sx={{ my: 2 }}>
                                        Register
                                    </Button>
                                </Link>
                                
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AppBarPost;