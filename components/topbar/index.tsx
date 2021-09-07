import React from 'react';
import {renderIcon} from '../icon'
import {Item} from './item'

import { Container, SocialMediaContainer, NavContainer } from './styles';

export const Topbar: React.FC = () => {
  return (
    <Container>
      <SocialMediaContainer>
        <Item isActive refId='about'>About</Item>
        <Item isActive={false} refId='projects'>Projects</Item>
        <Item isActive={false} refId='contact'>Contact</Item>
      </SocialMediaContainer>
      <NavContainer>
        {renderIcon('FiGithub')}
        {renderIcon('FiLinkedin')}
      </NavContainer>
    </Container>
  );
}
