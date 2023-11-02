import React from 'react'
import './Home.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';

function Home() {
  return (
    <>
    <div className='div'>
        <p className='h1'><b>Welcome to InstaMed</b></p>
        <img src="https://www.menap-smi.org/wp-content/uploads/title-banner-The-Role-of-the-Pharmacist-in-Self-Care-and-Self-Medication.jpg"/>
        <p>Are you tired of pharmacies robbing you in the name of medication?</p>

        <p className='dic'> Rest Easy! Insta Med has come to your aid with the most affordable high quality medication delivered right to your doorstep. All with a simple step of placing your order and no other hassles!</p>
    
        <p>
            <b>ORDER TODAY!</b>
        </p>
    </div>
    <div className='footer'>
        Contact us : <FacebookIcon className='fb' fontSize='large' /><InstagramIcon  className='fb' fontSize='large'/><RedditIcon  className='fb' fontSize='large'/>
    </div>
    </>
  )
}

export default Home