import styled from 'styled-components'
import {lighten} from 'polished'

export const Container = styled.div`  
  display: flex;
  justify-content: space-between;
  position: absolute;
  
  width: 100vw;
  height: 2rem;
  left: 0;
  bottom:1rem;
  padding: 0 1rem;


`

export const SouceCode = styled.span`
  color: var(--gray-600);
  cursor: pointer;

  &:hover {
    color: ${lighten(0.25, '#7A748E')};
  }

  transition: color, 0.2s;
`





