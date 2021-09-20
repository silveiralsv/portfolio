/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Container, ButtonsContainer } from './styles';
import {PrimaryButton, Secondary}  from '../../button'
import {Footer}  from '../../footer'
import { useRouter } from 'next/router';

export const HomePage: React.FC = () => {
  const router = useRouter()
  
  const handleAboutMe = () => {
    router.push('/about')
  }
  return (
    <Container>
      <h1>Hey there, I'm Lucas.</h1>
      <span>Passionate full stack developer, focused on Javascript ecossystem</span>

      <ButtonsContainer> 
      <PrimaryButton className='abut-primary' onClick={handleAboutMe}> 
        About me
      </PrimaryButton>
      <Secondary className='abut-secondary'>
        Blog
      </Secondary>

      </ButtonsContainer>

    <Footer />

    </Container>
  );
}
