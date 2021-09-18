import React from 'react';
import {About} from './about'
import {Projects} from './projects'
import { Container } from './styles';

export const Section: React.FC = () => {
  return (
    <Container>
      <About/>
      <Projects/>
    </Container>
  );
}
