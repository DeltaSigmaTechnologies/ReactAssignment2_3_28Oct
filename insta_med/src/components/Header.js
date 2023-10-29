import React from 'react'
import AppBar from '@mui/material/AppBar'
import {Stack, Toolbar ,Typography, colors} from '@mui/material'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'
import MedicationIcon from '@mui/icons-material/Medication';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Header() {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
            <Typography variant='h4' sx={{flexGrow:1, textAlign:"left"}}>
                <MedicationIcon fontSize='large'/>    Insta Med
            </Typography>
            <Stack direction='row' spacing={2}>
              <Link to="/">
              <Button style={{color:'white'}}>Home</Button>
              </Link>
              <Link to="/place-your-order">
              <Button style={{color:'white'}}><AddShoppingCartIcon />Order</Button>
              </Link>
            </Stack>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header