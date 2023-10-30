import React from 'react'
import AppBar from '@mui/material/AppBar';
import {Stack, Toolbar,Typography} from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
        < AppBar >
        <Toolbar>
            <Typography variant='h3'
            sx={{flexGrow:1,textAlign:"center"}}>
            Online Medical Store
            </Typography>
            <Stack direction='row' spacing={2}>
                <Link to='/'>
            <Button  style={{color:'white'}}>Home</Button>
            </Link>
            <Link to='table'>
            <Button style={{color:'white'}}>MedicineTable</Button>
            </Link>
            </Stack>
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header