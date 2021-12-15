import React, { useMemo } from 'react';
import {Container, AppBar, Box,  Grid, Tabs, Tab, Link as MuiLink, List, ListItemButton, Typography, Button } from '@mui/material'
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import logo from '../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { HideOnScroll } from '../transitions';




export const NavHeader: React.FC = () => {
  const {asPath} = useRouter()
  const value = useMemo(() => {
    if(asPath) {
      switch (asPath) {
        case '/about':
          return 1
        default:
          return 0
      }
    }
  }, [asPath])



  
  return (
    <HideOnScroll>
    <AppBar  position="fixed" style={{background: '#0c2034'}}>
      
      <Container maxWidth="xl" sx={{display: 'flex', p: {xs: '5px 5%', xl: '5px 0'}}}>

        <Grid container spacing={2} >
          <Grid item xs={6} sx={{my: 1}}>
            <Image src={logo} />
          </Grid>
          <Grid item xs={6} sx={{my: 2, display: 'flex'}} justifyContent="end">
            <Button variant='outlined' size="medium" href="https://www.linkedin.com/in/lucas-silveira-007160139/">
              <Typography variant='button' color="#60b4fe">Say Hi!</Typography>
            </Button>
          </Grid>
          
        </Grid>
        
        
      </Container>
    </AppBar>
    </HideOnScroll>
  );
}
