import React from 'react';
import { Container } from './styles';
import { renderIcon, IconTypes } from '../../icon'

type PrimaryProps = React.HTMLProps<HTMLButtonElement> & {
  icon?: IconTypes
}

export const Secondary: React.FC<PrimaryProps> = ({onClick, icon, children}) => {
  return (
  <Container>
    <button onClick={onClick}>
      {icon && renderIcon(icon)}
      {children}
    </button>
  </Container>
  );
}

