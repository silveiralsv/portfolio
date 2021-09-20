import React from 'react';

import { Container, SouceCode } from './styles';


export const Footer: React.FC = () => {

  const handleSouceCode = () => {
    window.open('https://github.com/silveiralsv/portfolio')
  }

  return (
    <Container>
      <span>Copyright © {new Date().getFullYear()} All rights reserved</span>      
      <SouceCode onClick={handleSouceCode}>Source code</SouceCode>
    </Container>
  );
}
