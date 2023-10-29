import React from 'react';
import AppBar from '@mui/material/AppBar';
import {Toolbar, Typography, Stack} from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <AppBar>
            <Toolbar>
                <Typography variant='h6' sx={{flexGrow:1, textAlign:"center"}}>
                  COMPANY NAME LTD
                </Typography>
                <Stack direction='row' spacing={2}>
                <Link to='/'>
                <Button style={{color:'white'}}>Home</Button>
                </Link>
                <Link to='/employees'>
                <Button style={{color:'white'}}>Employees</Button>
                </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    </>
  );
};
export default Header;