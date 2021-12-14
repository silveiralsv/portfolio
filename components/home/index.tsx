import React from 'react';
import Image from 'next/image'
import avatar from '../assets/avataaars.svg'
import hero from '../assets/hero.svg'

import { Container, Typography } from '@mui/material';

export const HomeSection: React.FC = (props) => {
  return (
    <Container sx={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative'}}> 
        <Typography variant="h2" component="div">
          {'FullStack Developer'}
        </Typography>
          <Typography variant="h6" component="div" >
            {'I code and build beatifully designed websites and mobile apps, and I love what I do.'}
          </Typography>
          <Image src={avatar}/>
          <Container sx={{position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center'}}>
            <Image src={hero} />
          </Container>
    </Container>
  );
}
