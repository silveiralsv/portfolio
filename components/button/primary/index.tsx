import React from 'react';
import { Container } from './styles';
import {renderIcon, IconTypes} from '../../icon'

type PrimaryProps = React.HTMLProps<HTMLButtonElement> & {
  icon?: IconTypes
  onIconClick?: () => void
}

export const PrimaryButton: React.FC<PrimaryProps> = ({onClick, icon, children, onIconClick}) => {
  return (
  <Container>
    <button onClick={onClick}>
      {icon && renderIcon(icon, onIconClick)}
      {children}
    </button>
  </Container>
  );
}

