import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { NavLink }from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor : 'black'}}>
                <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } , color : 'lightseagreen'}}>
                    Student Management System
                </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                        <NavLink className="myNavLink" to="/home">HOME</NavLink>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                    <NavLink className="myNavLink" to="/students">SHOW STUDENT</NavLink>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                        <NavLink className="myNavLink" to="/students/add">ADD STUDENT</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;