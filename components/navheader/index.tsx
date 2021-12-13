import React, { useEffect, useState } from 'react';
import {Container, AppBar, Box, Link, Grid, Tabs, Tab, useScrollTrigger, useMediaQuery } from '@mui/material'
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import logo from '../assets/logo.png'
import Image from 'next/image'



export const NavHeader: React.FC = () => {

  
  return (
    <AppBar position="fixed" style={{background: '#34383a'}}>
      
      <Container maxWidth="xl" sx={{display: 'flex', padding: '5px 0'}}>

        <Grid container spacing={2} >
          <Grid item xs={4} sx={{my: 1}}>
            <Image src={logo} />
          </Grid>
          <Grid item xs={4} sx={{my: 1}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', my: 2}} >
              <Link  href="#home"  key={'home'} > home </Link>
              <Link  href="#about" key={'about'}> about </Link>
              <Link  href="#projects"  key={'projects'}> projects </Link>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{my: 1}}>
            <Box sx={{my: 2,display: 'flex',  justifyContent: 'flex-end'}}>
            <FiGithub />
            <FiLinkedin />
            </Box>
          </Grid>
          
        </Grid>
        
        
      </Container>
    </AppBar>
  );
}
