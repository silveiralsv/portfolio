import React from 'react';
import { Container } from './styles';
import { FiPlus } from 'react-icons/fi'

type PrimaryProps = React.HTMLProps<HTMLButtonElement> & {}

export const PrimaryButton: React.FC<PrimaryProps> = ({onClick, children}) => {
  
  const renderIcon = () => {
    
  }
  
  return (
  <Container>
    <button onClick={onClick}>
      <FiPlus/>
      {children}
    </button>
  </Container>
  );
}

