import styled from 'styled-components'
import {darken} from 'polished'

type ContainerProps = {
  isActive: boolean
}

export const Container = styled.div<ContainerProps>`
  display: block;
  padding: 8px 8px 8px 32px;
  
  font-size: 25px;
  cursor: pointer;
  color: var(--gray-600);
  color: ${(props) => props.isActive ? 'var(--white)' : 'var(--gray-600)'};
  &:hover {
    color: ${(props) => props.isActive ? darken(0.3, '#FFFFFF') : darken(0.3, '#7A748E')}
  }
  transition: color 0.2s;

  svg {
    width: 25px;
    height: 25px;
    vertical-align: middle; 
  }
`;

export const ItemName = styled.a`
  margin-left: 30px;
`;