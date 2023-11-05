import React from 'react'
import AppBar from '@mui/material/AppBar';
import {  Stack, Toolbar, Typography } from '@mui/material';
import { Button} from '@mui/material';
import { Link } from 'react-router-dom';
import { Margin } from '@mui/icons-material';

function Header() {
  return (
    
        <AppBar position='sticky' top='0'  >
            <Toolbar>
              
                <Typography variant='h6'
                sx={{flexGrow:1, textAlign:"centre", top:'0'}}>
                    About me 
                </Typography >
                <Stack direction='row' spacing={2}  >
               <Link to="/">
                <Button style={{color:'purple'}} >Home</Button>
               </Link>
               <Link to="/Aboutme">
               <Button style={{color:'purple'}} >about me</Button>
               </Link>
               <Link to="/Table">
                <Button style={{color:'purple'}}>Table</Button>
               </Link>

               </Stack>
            </Toolbar>
            </AppBar>
    
  )
}

export default Header