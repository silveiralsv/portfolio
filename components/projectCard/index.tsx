import { Grid } from '@mui/material';
import React from 'react';
import { ProjectCard } from './card';
import portfolio from '../assets/projectsPreview/portfolio.png';




export const Projects: React.FC = () => {
  return (
    <Grid>
      <Grid item xs={12}>

        <ProjectCard text='Portfólio' title='Portfólio' url='https://www.google.com' image={portfolio}/>
      </Grid>
    </Grid>
  );
}
