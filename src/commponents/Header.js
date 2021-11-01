import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" style={{flexGrow:'1'}}>USER CRUD</Typography>
                <Button color="inherit" component={Link} to="/">
                    User's List
                </Button>
                <Button color="inherit" component={Link} to="/addUser">
                    Add user
                </Button>
                <Button color="inherit" component={Link} to="/about">
                    About Us
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
