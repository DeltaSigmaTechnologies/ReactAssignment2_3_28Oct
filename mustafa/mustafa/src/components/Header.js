import React from 'react'
import AppBar from '@mui/material/AppBar';
import {  Stack, Toolbar, Typography } from '@mui/material';
import { Button} from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    
        <AppBar position='static'  >
            <Toolbar>
              
                <Typography variant='h6'
                sx={{flexGrow:1, textAlign:"centre"}}>
                    About me 
                </Typography >
                <Stack direction='row' spacing={2}  >
               <Link to="/">
                <Button style={{color:'purple'}} >Home</Button>
               </Link>
               <Link to="/Aboutme">
               <Button style={{color:'purple'}} >about me</Button>
               </Link>
               </Stack>
            </Toolbar>
            </AppBar>
    
  )
}

export default Header