import React from 'react';
import {Item} from './item'

import { Container, SocialMediaContainer, NavContainer } from './styles';
import {renderIcon} from '../icon'

export const Topbar: React.FC = () => {
 
  const handleClickGitHub = () => {
    window.open('https://github.com/silveiralsv')
  }

  const handleClickLinkedIn = () => {
    window.open('https://www.linkedin.com/in/lucas-silveira-007160139/')
  }
  
  return (
    <Container>
      <SocialMediaContainer>
        <Item refId='/'>Home</Item>
        <Item refId='/about'>About</Item>
        <Item refId='/contact'>Contact</Item>
      </SocialMediaContainer>

      <NavContainer>
       {renderIcon('FiGithub', handleClickGitHub)}
       {renderIcon('FiLinkedin', handleClickLinkedIn)}
      </NavContainer>
    </Container>
  );
}
